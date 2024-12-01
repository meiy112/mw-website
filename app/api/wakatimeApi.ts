require("dotenv").config();

const fetchCodingHours = async () => {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    console.error("Error: API key not found. Check your .env file.");
    return;
  }

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7);
  const formattedStartDate = startDate.toISOString().split("T")[0];
  const formattedEndDate = new Date().toISOString().split("T")[0];

  try {
    const response = await fetch(
      `https://wakatime.com/api/v1/users/current/summaries?start=${formattedStartDate}&end=${formattedEndDate}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    const summaries = data.data;
    summaries.forEach(
      (summary: {
        range: { date: string };
        grand_total: { total_seconds: number };
      }) => {
        const date = summary.range.date;
        const totalSeconds = summary.grand_total.total_seconds;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        console.log(`Date: ${date} - Coding Hours: ${hours}h ${minutes}m`);
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchCodingHours();
