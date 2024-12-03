import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = `https://wakatime.com/api/v1/users/current/all_time_since_today`;
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "API key is not defined. Please set the WAKATIME_API_KEY environment variable.",
      },
      { status: 500 }
    );
  }

  const encodedApiKey = Buffer.from(apiKey).toString("base64");

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${encodedApiKey}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Error fetching data from WakaTime: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
