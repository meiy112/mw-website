import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const owner = "meiy112";
  const repo = "mw-website";
  const branch = "master";
  const token = process.env.GITHUB_API_TOKEN;

  if (!token) {
    return NextResponse.json(
      {
        error:
          "API token is not defined. Please set the GITHUB_API_TOKEN environment variable.",
      },
      { status: 500 }
    );
  }

  try {
    const commitsUrl = `https://api.github.com/repos/meiy112/mw-website/commits`;
    const commitsResponse = await fetch(commitsUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!commitsResponse.ok) {
      return NextResponse.json(
        { error: `Error fetching commits: ${commitsResponse.statusText}` },
        { status: commitsResponse.status }
      );
    }

    const commitsData = await commitsResponse.json();
    const latestCommitDate = commitsData[0]?.commit?.committer?.date;

    const pullsUrl = `https://api.github.com/repos/${owner}/${repo}/pulls?state=closed`;
    const pullsResponse = await fetch(pullsUrl, {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!pullsResponse.ok) {
      return NextResponse.json(
        { error: `Error fetching pull requests: ${pullsResponse.statusText}` },
        { status: pullsResponse.status }
      );
    }

    const pullsData = await pullsResponse.json();
    const mergedPRs = pullsData.filter((pr: any) => pr.merged_at);
    const latestMergedDate = mergedPRs.length
      ? mergedPRs
          .map((pr: any) => pr.merged_at)
          .sort()
          .reverse()[0]
      : null;

    const lastUpdateTime = latestMergedDate
      ? new Date(latestCommitDate) > new Date(latestMergedDate)
        ? latestCommitDate
        : latestMergedDate
      : latestCommitDate;

    return NextResponse.json({ lastUpdated: lastUpdateTime });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
