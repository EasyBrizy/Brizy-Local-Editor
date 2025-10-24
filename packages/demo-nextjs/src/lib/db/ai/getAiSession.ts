import { sessionId } from "./createSession";

export async function getSession() {
  if (!sessionId) {
    return Promise.reject("Missing Session");
  }

  return Promise.resolve(sessionId);
}
