"use server";

import { headers } from "next/headers";

export async function getOrigin(): Promise<string> {
  const headersList = headers();
  const protocol = headersList.get("x-forwarded-proto");
  const host = headersList.get("x-forwarded-host");
  const url = `${protocol}://${host}`;

  return URL.canParse(url) ? new URL(url).origin : "";
}
