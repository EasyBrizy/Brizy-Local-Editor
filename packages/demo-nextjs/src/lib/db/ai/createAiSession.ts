import { getConfig } from "@/config";

let sessionId = "";

export async function createAiSession(): Promise<{ sessionId: string; aiUrl: string }> {
  const apiUrl = getConfig().apiAiUrl;
  const rs = await fetch(`${apiUrl}/create-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "12345",
    },
  });

  if (rs.ok) {
    const { sessionId: id, aiUrl } = await rs.json();

    console.log(id);

    sessionId = id;

    return { sessionId: id, aiUrl };
  } else {
    throw new Error("Failed to create AI session");
  }
}

export { sessionId };
