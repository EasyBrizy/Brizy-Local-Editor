import { Arr, Json, Obj } from "@brizy/readers";
import {
  BlockWithThumbs,
  BlocksArray,
  CustomTemplatePage,
  DefaultBlock,
  DefaultBlockWithID,
  KitItem,
  KitsWithThumbs,
  LayoutsPages,
  LayoutsWithThumbs,
  Popup,
  StoriesWithThumbs,
} from "@builder/core/build/es/types/templates";
import { Response } from "@builder/core/build/es/types/common";
import { Output } from "@builder/core/build/es/types/types";
import { PublishData } from "@builder/core/build/es/types/publish";
import { isT, mPipe, pass } from "fp-utilities";
import { STORAGE_KEY_PREFIX, PublishedOutput } from "./utils/buildPreview";
import React, { useEffect, useReducer, useRef } from "react";
import {
  convertLayoutPages,
  convertLayouts,
  convertStories,
  convertStoriesPages,
  convertToCategories,
  converterKit,
  converterPopup,
  isDefaultBlockArray,
  isDefaultBlockWithID,
  isKitDataItems,
  isPopupDataResult,
  isStoryDataBlocks,
  isStoryDataResponse,
} from "./converters";
import { demoConfig } from "./demoConfig";
import { useEditor } from "./hooks/useEditor";
import { Config } from "./hooks/useEditor/types";
import { DynamicContentModal } from "./modals/DynamicContent";
import { reducer } from "./reducers";
import { State } from "./reducers/types";

const token = "demo";

const templates = "https://e-t-cloud.b-cdn.net/1.3.0";
const newTemplates = "https://template-mk.b-cdn.net/api";
const templatesImageUrl = "https://cloud-1de12d.b-cdn.net/media/iW=1024&iH=1024/";

const noop = () => {};

// Host that serves the editor runtime + its icon/font assets. The preview page
// is served from here so the published page renders same-origin with those
// assets (otherwise external SVG `<use>` icon refs are blocked by the browser).
const PREVIEW_HOST = "http://localhost:8001";
const PREVIEW_URL = (uid: string) => `${PREVIEW_HOST}/preview.html?uid=${uid}`;
const PREVIEW_READY = "brizy-preview:ready";
const PREVIEW_DATA = "brizy-preview:data";

const initialState: State = {
  output: "",
  modal: {
    opened: false,
    resolve: noop,
    reject: noop,
  },
};

interface Props {
  uid: string;
}

export const Editor = ({ uid }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  // The preview window (served from PREVIEW_HOST) can't read this origin's
  // localStorage, so when it signals it's ready we post the stored published
  // output back to it.
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data || data.type !== PREVIEW_READY || typeof data.uid !== "string") return;
      if (event.origin !== PREVIEW_HOST) return;

      const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${data.uid}`);
      let payload: PublishedOutput | null = null;
      if (raw) {
        try {
          payload = JSON.parse(raw) as PublishedOutput;
        } catch {
          payload = null;
        }
      }

      (event.source as Window | null)?.postMessage(
        { type: PREVIEW_DATA, uid: data.uid, payload },
        event.origin,
      );
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const config: Config = {
    ...demoConfig,
    container: containerRef.current,
    // extensions: [{ host: thirdPartyHost, path: "" }],
    dynamicContent: {
      groups: {
        richText: {
          handler(res, rej) {
            dispatch({ type: "modal", res, rej });
          },
        },
      },
      getPlaceholderData(res, rej, extra) {
        res({ test: ["test1"] });
      },
    },
    api: {
      media: {
        mediaResizeUrl: "https://cloud-1de12d.b-cdn.net/media",
        imagePatterns: {
          full: "{{ [baseUrl] }}/{{ iW=[iW] }}&{{ iH=[iH] }}&{{ oX=[oX] }}&{{ oY=[oY] }}&{{ cW=[cW] }}&{{ cH=[cH] }}/{{ [uid] }}/{{ [fileName] }}",
          original: "{{ [baseUrl] }}/{{ [sizeType] }}/{{ [uid] }}/{{ [fileName] }}",
          split: "{{ [baseUrl] }}/{{ iW=[iW] }}&{{ iH=[iH] }}/{{ [uid] }}/{{ [fileName] }}",
        },
        addMedia: {
          handler(res, rej, extra) {
            setTimeout(() => {
              res({
                uid: "1234",
                fileName: "my-custom-image.png",
              });
            }, 1000);

            // On Error
            //setTimeout(() => {
            //   rej("My custom error message");
            // }, 1000);
          },
        },
      },

      defaultKits: {
        async getKits(res: Response<Array<KitItem>>, rej: Response<string>) {
          try {
            const kits = await fetch(`${newTemplates}/get-kits`);

            if (kits) {
              const response = await kits.json();

              const parsedKits = response.collections.map((item: { slug: string; title: string }) => ({
                ...item,
                id: item.slug,
              }));

              res(parsedKits);
            }
          } catch (e) {
            rej("Failed to load Kits");
          }
        },
        async getMeta(res: Response<KitsWithThumbs>, rej: Response<string>, kit: KitItem) {
          try {
            const response = await fetch(`${newTemplates}/get-kit-collections-chunk?project_id=${kit.id}`);

            if (response) {
              const data = await response.json();

              const { types, blocks } = converterKit(data.collections, templatesImageUrl, kit.id);

              res({
                id: kit.id,
                blocks,
                categories: convertToCategories(data.categories),
                types,
                name: kit.title,
                styles: [data.styles],
              });
            }
          } catch (e) {
            rej("Failed to load meta.json");
          }
        },
        async getData(res: Response<Record<string, unknown>>, rej: Response<string>, kit: BlockWithThumbs) {
          try {
            const response = await fetch(`${newTemplates}/get-item?project_id=${kit.kitId}&page_slug=${kit.id}`, {
              method: "GET",
            });

            if (response) {
              const data = await response.json();

              const collection = data.collection.pop();

              const x = JSON.parse(collection.pageData).items.pop();

              res(x);
            }
          } catch (e) {
            rej("Failed to load resolves for selected DefaultTemplate");
          }
        },
      },
      defaultPopups: {
        async getMeta(res: Response<Popup>, rej: Response<string>) {
          try {
            const response = await fetch(`${newTemplates}/get-popups-chunk`);

            if (response) {
              const res2 = await response.json();

              const data = converterPopup(res2.collections, templatesImageUrl);

              const convertedCategories = convertToCategories(res2.categories);

              res({ ...data, categories: convertedCategories });
            }
          } catch (e) {
            rej("Failed to load meta.json");
          }
        },
        async getData(res: Response<DefaultBlockWithID>, rej: Response<string>, kit: KitItem) {
          try {
            const data = await fetch(`${newTemplates}/get-popup-data?project_id=${kit.id}`);

            if (data) {
              const res2 = await data.json();

              const parsedResult = mPipe(
                pass(isPopupDataResult),
                (res) => res.pop()?.pageData,
                (r) => Json.read(r),
                pass(isKitDataItems),
                Obj.readKey("items"),
                Arr.read,
                (r) => r.pop(),
              )(res2);

              if (isT(parsedResult) && isDefaultBlockWithID(parsedResult)) {
                res(parsedResult);
              }
            }
          } catch (e) {
            rej("Failed to load resolves for selected DefaultTemplate");
          }
        },
      },
      defaultLayouts: {
        async getMeta(res: Response<LayoutsWithThumbs>, rej: Response<string>) {
          try {
            const response = await fetch(`${newTemplates}/get-layouts-chunk`, {
              method: "GET",
            });

            if (response) {
              const data = await response.json();

              if (data.collections && data.categories) {
                const result: LayoutsWithThumbs = {
                  templates: convertLayouts(data.collections, templatesImageUrl),
                  categories: convertToCategories(data.categories),
                };

                res(result);
              }
            }
          } catch (e) {
            rej("Failed to load meta.json");
          }
        },
        async getData(
          res: Response<BlocksArray<DefaultBlockWithID>>,
          rej: Response<string>,
          { id, layoutId }: { id: string; layoutId: string },
        ) {
          try {
            const response = await fetch(`${newTemplates}/get-layouts-page?project_id=${layoutId}&page_slug=${id}`, {
              method: "GET",
            });

            if (response.ok) {
              const data = await response.json();

              const parsedResult = mPipe(
                Arr.read,
                (res) => res[0] as { pageData: string },
                Obj.readKey("pageData"),
                (r) =>
                  Json.read(r) as {
                    items: DefaultBlockWithID[];
                  },
              )(data);

              if (isT(parsedResult)) {
                const result: BlocksArray<DefaultBlockWithID> = {
                  blocks: [...parsedResult.items],
                };

                res(result);
              }
            }
          } catch (e) {
            rej("Failed to load resolves for selected DefaultTemplate");
          }
        },
        async getPages(res: Response<LayoutsPages>, rej: Response<string>, id: string) {
          try {
            const response = await fetch(`${newTemplates}/get-layouts-pages?project_id=${id}&per_page=20`, {
              method: "GET",
            });

            if (response) {
              const data = await response.json();

              const parsedData: CustomTemplatePage[] = convertLayoutPages(data.collections, templatesImageUrl, id);

              res({ pages: parsedData, styles: [data.styles] });
            }
          } catch (e) {
            rej("Failed to load pages for selected Layout");
          }
        },
      },
      defaultStories: {
        async getMeta(res: Response<StoriesWithThumbs>, rej: Response<string>) {
          try {
            const response = await fetch(`${newTemplates}/get-story-chunk`, {
              method: "GET",
            });

            if (response) {
              const result = await response.json();

              if (result.collections && result.categories) {
                const data = {
                  stories: convertStories(result.collections, templatesImageUrl),
                  categories: convertToCategories(result.categories),
                };

                res(data);
              }
            }
          } catch (e) {
            rej("Failed to load Stories");
          }
        },
        async getData(
          res: Response<BlocksArray<DefaultBlock>>,
          rej: Response<string>,
          { layoutId, id }: { id: string; layoutId: string },
        ) {
          try {
            const response = await fetch(`${newTemplates}/get-story-page-data?project_id=${layoutId}&page_slug=${id}`, {
              method: "GET",
            });

            if (response.ok) {
              const result = await response.json();

              const parsedResult = mPipe(
                pass(isStoryDataResponse),
                Obj.readKey("collection"),
                Json.read,
                pass(isStoryDataBlocks),
                pass(({ blocks }) => isDefaultBlockArray(blocks)),
              )(result);

              if (parsedResult) {
                res({ blocks: parsedResult.blocks });
              }
            }
          } catch (e) {
            rej("Failed to load resolves for selected DefaultTemplate");
          }
        },
        async getPages(res: Response<LayoutsPages>, rej: Response<string>, id: string) {
          try {
            const response = await fetch(`${newTemplates}/get-story-page?project_id=${id}&per_page=20`, {
              method: "GET",
            });

            if (response) {
              const result = await response.json();

              const parsedData = convertStoriesPages(result.collections, templatesImageUrl, id);

              res({
                pages: parsedData,
                styles: [result.styles],
              });
            }
          } catch (e) {
            rej("Failed to load pages for selected Stories");
          }
        },
      },
    },
    onSave: (data) => {
      dispatch({
        type: "update",
        data: JSON.stringify(data),
      });
    },
    pagePreview: PREVIEW_URL(uid),
    ui: {
      publish: {
        handler(res: Response<PublishData>, rej: Response<string>, data: Output) {
          try {
            const storageKey = `${STORAGE_KEY_PREFIX}${uid}`;
            const newData = data as PublishedOutput;

            // The editor may emit an Output where one of `projectData` / `pageData`
            // is missing. Merge with the previously stored value so we don't drop
            // the field that wasn't included in this publish.
            let prevData: PublishedOutput = {};
            try {
              const raw = localStorage.getItem(storageKey);
              if (raw) {
                prevData = JSON.parse(raw) as PublishedOutput;
              }
            } catch {
              prevData = {};
            }

            const mergedData: PublishedOutput = {
              projectData: newData.projectData ?? prevData.projectData,
              pageData: newData.pageData ?? prevData.pageData,
            };

            localStorage.setItem(storageKey, JSON.stringify(mergedData));
            window.open(PREVIEW_URL(uid), "_blank");
            res(data);
          } catch (e) {
            rej(String(e));
          }
        },
      },
    },
  };

  const [builderState, builderInstance] = useEditor(token, config);

  const handleUpdate = () => {
    builderInstance?.save();
  };

  const handleAdd = (value: string) => {
    dispatch({
      type: "resolvePlaceholder",
      data: value,
    });
  };

  const handleClose = () => {
    dispatch({
      type: "rejectPlaceholder",
      data: "Placeholder not added",
    });
  };

  return (
    <div className="container">
      {builderState.status === "error" ? builderState.error : <div className="container__editor" ref={containerRef} />}

      <DynamicContentModal opened={state.modal.opened} onAdd={handleAdd} onClose={handleClose} />

      <div className="container__output">
        <button className="btn" onClick={handleUpdate}>
          Update
        </button>
        <textarea className="output" defaultValue={state.output} />
      </div>
    </div>
  );
};
