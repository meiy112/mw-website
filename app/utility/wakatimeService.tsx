import { format, subDays } from "date-fns";
import { calculateDailyTime } from "./utility";

export const fetchCodingHours = async () => {
  try {
    const response = await fetch("/api/fetchCodingHours");

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    const totalSeconds = data.data.total_seconds;

    return {
      seconds: totalSeconds as number,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
};

export const fetchDailyHours = async (date: string) => {
  const queryParams = new URLSearchParams({
    date,
  });

  try {
    const response = await fetch(
      `/api/fetchDuration?${queryParams.toString()}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData.error);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching WakaTime data:", error);
  }
};

export const fetchWeeklyCodingTime = async (): Promise<
  { hours: number; minutes: number; day: string }[]
> => {
  const results: { hours: number; minutes: number; day: string }[] = [];

  for (let i = 0; i < 7; i++) {
    const date = format(subDays(new Date(), i), "yyyy-MM-dd");

    try {
      const response = await fetchDailyHours(date);

      if (!response) {
        results.push({
          hours: 0,
          minutes: 0,
          day: formatDayOfWeek(subDays(new Date(), i)),
        });
        continue;
      }

      const time = calculateDailyTime(response);

      results.push({
        hours: time.hours,
        minutes: time.minutes,
        day: formatDayOfWeek(subDays(new Date(), i)),
      });
    } catch (error) {
      console.error(`Error fetching data for ${date}:`, error);
      results.push({
        hours: 0,
        minutes: 0,
        day: formatDayOfWeek(subDays(new Date(), i)),
      });
    }
  }

  return results;
};

const formatDayOfWeek = (date: Date): string => format(date, "EEE");
