'use client';

import React from "react";
import {cn} from "@/lib/utils";

interface Vote {
  userId: string;
  available: boolean;
}

interface DayProps {
  votes: Vote[];
  dayNumber: number;
  hidden: boolean;
  onClick?: () => void;
}

const getColor = (availability: number | null) => {
  if (availability === null) return "bg-white border-gray-300";
  const colorScale = [
    "bg-red-500", "bg-red-400", "bg-orange-500", "bg-orange-400", "bg-yellow-500", "bg-yellow-400",
    "bg-green-400", "bg-green-500", "bg-green-600", "bg-green-700"
  ];
  return colorScale[Math.min(Math.floor(availability * (colorScale.length - 1)), colorScale.length - 1)];
};

export const Day = ({ votes, dayNumber, hidden, onClick }: DayProps) => {
  const totalVotes = votes.length;
  const availableVotes = votes.filter(vote => vote.available).length;
  const availability = totalVotes > 0 ? availableVotes / totalVotes : null;

  return (
    <button
      className={cn(
        "relative aspect-square min-h-16 min-w-16 sm:min-h-24 sm:min-w-24 flex items-center justify-center font-bold text-sm sm:text-base border-2 rounded-xl transition-all",
        hidden ? "bg-gray-300 text-gray-500 cursor-not-allowed" : getColor(availability),
        !hidden && "hover:scale-110 hover:border-black"
      )}
      onClick={!hidden ? onClick : undefined}
      disabled={hidden}
    >
      <div className="absolute top-1 flex flex-wrap justify-center gap-0.5 w-full px-1 text-l">
        {dayNumber}
      </div>
      {totalVotes > 0 && (
        <div className="absolute bottom-1 flex flex-wrap justify-center gap-0.5 w-full px-1">
          {votes.slice(0, 24).map((vote, index) => (
            <span
              key={index}
              className={cn(
                "min-h-1.5 min-w-1.5 sm:min-h-3 sm:min-w-3 rounded-full border border-black",
                vote.available ? "bg-green-500" : "bg-red-500"
              )}
            />
          ))}
        </div>
      )}
    </button>
  );
};
