import { getConfig } from "@/config";

export function createAIRedirectUrl(sessionId: string, baseUrl: string): string {
  const apiAiUrl = getConfig().apiAiUrl;
  const url = new URL(`${apiAiUrl}/get-started/project`);
  url.searchParams.append("sessionId", `${sessionId}`);
  url.searchParams.append("callbackUrl", `${baseUrl}/api/ai-templates`);
  return url.toString();
}
