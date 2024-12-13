import { fetchWeeklyCodingTime } from "@/app/utility/wakatimeService";
import s from "./Footer.module.css";
import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from "recharts";

const CodingHours = () => {
  const [codingHours, setCodingHours] = useState<
    { hours: number; minutes: number; day: string }[]
  >([]);

  const getCodingHours = async () => {
    const res = await fetchWeeklyCodingTime();
    return res;
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCodingHours();
      setCodingHours(res);
    };

    fetchData();
  }, []);

  const chartData = codingHours
    .slice()
    .reverse()
    .map((item) => ({
      Day: item.day,
      Minutes: item.minutes + item.hours * 60,
    }));

  return (
    <div className={`${s.border} pt-[1.2em] px-[1.8em] pb-[1.5em]`}>
      <div className={`${s.header}`}>Today&apos;s Coding Hours &nbsp;</div>
      {codingHours.length > 0 ? (
        <div className={s.dailyTime}>
          {codingHours[0].hours} hr {codingHours[0].minutes} min
        </div>
      ) : (
        "Loading..."
      )}
      <div className="mb-[-1.5em] mt-[1em]">
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
          width={410}
          height={150}
        >
          <CartesianGrid
            vertical={false}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeDasharray="3 3"
          />
          <XAxis dataKey="Day" tick={false} axisLine={false} />
          <Area
            dataKey="Minutes"
            type="linear"
            fill="rgba(255, 255, 255, 0.3)"
            fillOpacity={0.4}
            stroke="white"
          />
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length > 0) {
                const { Day, Minutes } = payload[0].payload;
                return (
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.75)",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      padding: "0.5em",
                      borderRadius: "5px",
                      fontWeight: "300",
                      fontSize: "0.9rem",
                    }}
                  >
                    <strong>{Day}</strong>
                    <div>{Minutes} minutes</div>
                  </div>
                );
              }
              return null;
            }}
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default CodingHours;
