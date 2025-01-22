import { PostsSources } from "@/types/posts";
import { Handler } from "../../../types/type";

export type PostHandler = (uid: string) => Promise<PostsSources>;

export const getPostHandler = (postHandler: PostHandler, uid: string) => {
  const handler: Handler<PostsSources, string, undefined> = async (res, rej) => {
    try {
      const data = await postHandler(uid);
      res(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Error getting the posts sources";
      rej(message);
    }
  };

  return handler;
};
