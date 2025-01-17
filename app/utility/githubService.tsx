function separateDateTime(timestamp: string) {
  const dateTime = timestamp.replace("T", " ").replace("Z", "");
  return dateTime;
}

export const fetchLastUpdateTime = async () => {
  try {
    const response = await fetch("/api/fetchLastUpdated");

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    const formattedData = separateDateTime(data.lastUpdated);

    return formattedData;
  } catch (error) {
    console.error("Error fetching last update time:", error);
    return null;
  }
};
