"use client"

import React from "react";
import dayjs from "dayjs";
import {Day} from "@/components/atoms/day";

interface MonthProps {
  year: number;
  month: number;
}

export const Month: React.FC<MonthProps> = ({year, month}) => {
  const firstDay = dayjs(`${year}-${month}-01`);
  const daysInMonth = firstDay.daysInMonth();
  const firstDayPosition = firstDay.day();

  return (
    <>
      <h1 className={"flex w-full justify-center text-2xl font-bold"}>
        {year} {dayjs(firstDay).format("MMMM")}
      </h1>

      <div className={"grid grid-cols-7 gap-2"}>
        {/* start of the week padding */}
        {Array.from({length: firstDayPosition - 1}, (_, i) => i + 1).map(day => (
          <div key={`empty-${day}-${month}-${year}`}/>
        ))}

        {Array.from({length: daysInMonth}, (_, i) => i + 1).map(day => (
          <Day key={`${day}-${month}-${year}`} votes={[]} dayNumber={day} hidden={false} onClick={() => {}}/>
        ))}
      </div>
    </>
  );
};
