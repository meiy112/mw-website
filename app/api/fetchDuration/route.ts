import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
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

  const url = new URL(req.url);
  const date = url.searchParams.get("date");

  if (!date) {
    return NextResponse.json(
      { error: "The 'date' query parameter is required." },
      { status: 400 }
    );
  }

  const encodedApiKey = Buffer.from(apiKey).toString("base64");

  const queryParams = new URLSearchParams({
    date,
  });

  const apiUrl = `https://wakatime.com/api/v1/users/current/durations?${queryParams.toString()}`;

  try {
    const response = await fetch(apiUrl, {
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
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
