import { getConfig } from "@/config";

let sessionId = "";

export async function createAiSession(): Promise<string> {
  const apiUrl = getConfig().apiAiUrl;
  const rs = await fetch(`${apiUrl}/create-session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      apiKey: "12345",
    }),
  });

  if (rs.ok) {
    const { sessionId: id } = await rs.json();

    console.log(id);

    sessionId = id;

    return id;
  } else {
    throw new Error("Failed to create AI session");
  }
}

export { sessionId };
