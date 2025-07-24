import { getConfig } from "@/config";

export async function getAiTemplate(sessionId: string): Promise<{
  pages: string[];
  project: string;
}> {
  const apiUrl = getConfig().apiAiUrl;
  const data = await fetch(`${apiUrl}/generated-template/${sessionId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  return await data.json();
}
