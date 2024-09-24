"use client";

import { DynamicContentModal } from "@/components/modals/DynamicContent";
import { getConfig } from "@/config";
import { useEditor } from "@/hooks/useEditor";
import { Config } from "@/hooks/useEditor/types";
import { Arr, Json, Obj } from "@brizy/readers";
import { LeftSidebarMoreOptionsIds, LeftSidebarOptionsIds } from "@builder/core/build/es/types/leftSidebar";
import {
  BlockWithThumbs,
  DefaultBlockWithID,
  KitItem,
  KitType,
  Kits,
  Popup,
  StoryTemplate,
  Template,
} from "@builder/core/build/es/types/templates";
import { Response } from "demo-nextjs/src/api/types";
import { isT, mPipe, pass } from "fp-utilities";
import { useRouter } from "next/navigation";
import React, { useReducer, useRef } from "react";
import {
  convertToCategories,
  converterPopup,
  isDefaultBlockWithID,
  isKitDataItems,
  isPopupDataResult,
} from "./converters";
import { reducer } from "./reducers";
import { State } from "./reducers/types";
import "./styles/index.css";
import { Props } from "./types";
import { asNewCategory, numCategoryToStringCategory, templateDetails } from "./utils";

const token = getConfig().editorToken;

const templates = "https://e-t-cloud.b-cdn.net/1.3.0";
const newTemplates = "https://template-mk.b-cdn.net/api";
const templatesImageUrl = "https://cloud-1de12d.b-cdn.net/media/iW=1024&iH=1024/";

const noop = () => {};

const initialState: State = {
  output: "",
  modal: {
    opened: false,
    resolve: noop,
    reject: noop,
  },
};

export const Editor = (props: Props) => {
  const { config: baseConfig, origin } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const config: Config = {
    ...baseConfig,
    container: containerRef.current,
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

    ui: {
      leftSidebar: {
        topTabsOrder: [
          LeftSidebarOptionsIds.cms,
          LeftSidebarOptionsIds.addElements,
          LeftSidebarOptionsIds.reorderBlock,
          LeftSidebarOptionsIds.globalStyle,
        ],
        [LeftSidebarOptionsIds.cms]: {
          onClose() {},
          onOpen() {
            router.push("/admin");
          },
        },
        [LeftSidebarOptionsIds.more]: {
          options: [
            {
              type: LeftSidebarMoreOptionsIds.shortcuts,
              label: "Shortcuts",
              link: "",
            },
            {
              type: LeftSidebarMoreOptionsIds.link,
              label: "Back to Dashboard",
              link: `${origin}/admin`,
              linkTarget: "_parent",
            },
          ],
        },
      },
      publish: {
        async handler(res, rej, data) {
          try {
            if (data.pageData) {
              await fetch("/api/items", {
                method: "PUT",
                body: JSON.stringify({
                  id: baseConfig.pageData.id,
                  pageData: data.pageData,
                }),
              });
            }
            if (data.projectData) {
              await fetch("/api/project", {
                method: "PUT",
                body: JSON.stringify({
                  id: baseConfig.projectData.id,
                  projectData: data.projectData,
                }),
              });
            }

            dispatch({
              type: "update",
              data: JSON.stringify(data),
            });
            res(data);
          } catch (e) {
            dispatch({
              type: "error",
              message: "Failed to update projectData, pageData",
            });
            rej("Failed to update projectData, pageData");
          }
        },
      },
    },

    // extensions: [{ host: "http://localhost:2222" }],
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
          },
        },
      },

      defaultKits: {
        async getKits(res, rej) {
          try {
            const kits = await fetch(`${templates}/kits/meta.json`)
              .then((r) => r.json())
              .then((data) =>
                data.map((kit: { id: string; name: string }) => ({
                  id: kit.id,
                  title: kit.name,
                })),
              );

            res(kits);
          } catch (e) {
            rej("Failed to load Kits");
          }
        },
        async getMeta(res, rej, kit) {
          try {
            const kitsUrl = `${templates}/kits`;
            const kits = await fetch(`${kitsUrl}/meta.json`).then((r) => r.json());

            const _kit = kits.find((item: Kits) => item.id === kit.id);

            enum Theme {
              light = 0,
              dark = 1,
            }

            const blocks = _kit?.blocks.map(
              ({ id, cat, pro, title, keywords, thumbnailWidth, thumbnailHeight, type, blank }: BlockWithThumbs) => ({
                id,
                cat: numCategoryToStringCategory({ cat, dict: _kit.categories }),
                title,
                type: [Theme[type]],
                keywords,
                thumbnailHeight,
                thumbnailWidth,
                thumbnailSrc: `${templates}/kits/thumbs/${id}.jpg`,
                pro: pro ?? false,
                kitId: kit.id,
                blank,
              }),
            );

            res({
              id: kit.id,
              blocks,
              categories: asNewCategory(_kit.categories),
              types: _kit.types as KitType[],
              name: kit.title,
              styles: _kit.styles,
            });
          } catch (e) {
            rej("Failed to load meta.json");
          }
        },
        async getData(res, rej, kit) {
          const kitsUrl = `${templates}/kits`;
          try {
            const data = await fetch(`${kitsUrl}/resolves/${kit.id}.json`).then((r) => r.json());
            res(data);
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
        async getMeta(res, rej) {
          const layoutsUrl = `${templates}/layouts`;
          try {
            const meta: Template = await fetch(`${layoutsUrl}/meta.json`).then((r) => r.json());

            const data = {
              categories: asNewCategory(meta.categories),
              templates: meta.templates.map((item) => ({
                ...item,
                cat: numCategoryToStringCategory({
                  cat: item.cat as unknown as number[],
                  dict: meta.categories,
                }) as unknown as Symbol[],
                thumbnailSrc: `${layoutsUrl}/thumbs/${item.pages[0].id}.jpg`,
                ...(templateDetails(item.pages) ?? {}),
                pages: item.pages.map((page) => ({
                  ...page,
                  thumbnailSrc: `${layoutsUrl}/thumbs/${page.id}.jpg`,
                })),
              })),
            };

            res(data);
          } catch (e) {
            rej("Failed to load meta.json");
          }
        },
        async getData(res, rej, { id }) {
          const layoutsUrl = `${templates}/layouts`;
          try {
            const data = await fetch(`${layoutsUrl}/resolves/${id}.json`).then((r) => r.json());

            res(data);
          } catch (e) {
            rej("Failed to load resolves for selected DefaultTemplate");
          }
        },
      },
      defaultStories: {
        async getMeta(res, rej) {
          const storiesUrl = `${templates}/stories`;
          try {
            const meta: StoryTemplate = await fetch(`${storiesUrl}/meta.json`).then((r) => r.json());

            const data = {
              ...meta,
              stories: meta.stories.map((story) => ({
                ...story,
                thumbnailSrc: `${storiesUrl}/thumbs/${story.pages[0].id}.jpg`,
                pages: story.pages.map((page) => ({
                  ...page,
                  thumbnailSrc: `${storiesUrl}/thumbs/${page.id}.jpg`,
                })),
              })),
            };

            res(data);
          } catch (e) {
            rej("Failed to load meta.json");
          }
        },
        async getData(res, rej, id) {
          const storiesUrl = `${templates}/stories`;
          try {
            const data = await fetch(`${storiesUrl}/resolves/${id}.json`).then((r) => r.json());
            res(data);
          } catch (e) {
            rej("Failed to load resolves for selected DefaultTemplate");
          }
        },
      },
    },
  };

  const [builderState] = useEditor(token, config);

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
    <>
      {state.error && <div style={{ backgroundColor: "red", color: "#fff" }}>{state.error}</div>}

      <div className="container">
        {builderState.status === "error" ? (
          builderState.error
        ) : (
          <div className="container__editor" ref={containerRef} />
        )}
        <DynamicContentModal opened={state.modal.opened} onAdd={handleAdd} onClose={handleClose} />
      </div>
    </>
  );
};
