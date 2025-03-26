import React from "react";
import {cn} from "@/lib/utils";

interface CurrentUserCardProps {
  className?: string
  name: string
}

export const CurrentUserCard: React.FC<CurrentUserCardProps> = ({className, name}) => {
  return (
    <div className={cn("border-2 p-2 rounded-lg gap-2 hover:bg-gray-100 cursor-pointer", className)}>
      <div className={"size-6 bg-gray-500 rounded-full"}/>
      <h1>{name}</h1>
    </div>
  )
}
