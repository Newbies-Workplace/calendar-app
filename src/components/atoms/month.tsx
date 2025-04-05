"use client"

import React from "react";
import dayjs from "dayjs";
import {Day} from "@/components/atoms/day";
import {Vote} from "@prisma/client";

interface MonthProps {
  year: number;
  month: number;

  currentUserId: string;

  votes: Vote[];
  onDayClick: (date: string, available: boolean) => void;
}

export const Month: React.FC<MonthProps> = ({year, month, currentUserId, votes, onDayClick}) => {
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

        {Array.from({length: daysInMonth}, (_, i) => i + 1).map(day => {
          const dayVotes = votes.filter((vote) => {
            return dayjs(vote.day).isSame(`${year}-${month}-${day}`, 'day')
          })

          const onClick = () => {
            const isCurrentUserAvailable = dayVotes.some((vote) => {
              return vote.userId === currentUserId && vote.status === "AVAILABLE"
            })

            onDayClick(`${year}-${month}-${day}`, !isCurrentUserAvailable)
          }

          return (
            <Day
              key={`${day}-${month}-${year}`}
              votes={dayVotes}
              dayNumber={day}
              hidden={false}
              onClick={onClick}/>
          );
        })}
      </div>
    </>
  );
};
