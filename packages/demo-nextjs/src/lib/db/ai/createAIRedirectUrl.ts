export function createAIRedirectUrl(apiAiUrl: string, baseUrl: string): string {
  const url = new URL(apiAiUrl);
  url.searchParams.append("callbackUrl", `${baseUrl}/api/ai-templates`);
  return url.toString();
}
