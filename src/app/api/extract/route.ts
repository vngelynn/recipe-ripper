import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()

  console.log("body in route.ts: ", body)
  return NextResponse.json({
    receivedUrl: body.url,
  })
}
