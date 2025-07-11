import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  console.log("GET Request", searchParams);

  return NextResponse.json([
    { url: "https://prairiedog4cfd094d.brizy.site/", id: 21949667 },
    { url: "https://aphid6b5105f6.brizy.site/", id: 21949639 },
    { url: "https://sparrow195e0a41.brizy.site/", id: 21949641 },
    { url: "https://hamster12479100.brizy.site/", id: 21949706 },
    { url: "https://loris3fcbaa96.brizy.site/", id: 21949685 },
    { url: "https://roadrunner3820d98c.brizy.site/", id: 21949636 },
    { url: "https://dormouse5a2f7536.brizy.site/", id: 21949660 },
    { url: "https://hedgehog613562fc.brizy.site/", id: 21949691 },
  ]);
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log("POST Request", body);
  return NextResponse.json({ message: "POST Request Received" });
}
