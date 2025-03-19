"use client"

import "dayjs/locale/pl";
import dayjs from "dayjs";
import React from "react";

dayjs.locale("pl")

export const Providers: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      {children}
    </>
  );
}
