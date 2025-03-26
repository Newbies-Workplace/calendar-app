import {EventCreateForm} from "@/components/forms/eventCreateForm";
import React from "react";
import {CurrentUserCard} from "@/components/atoms/currentUserCard";
import {getSession} from "@/lib/session";
import {cn} from "@/lib/utils";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="h-screen flex flex-row">
      {/* left section */}
      <div className="hidden lg:flex flex-col gap-8 flex-1 justify-center items-center bg-neutral-900">
        <p className="text-8xl">🗓️</p>
        <h1 className="font-bold text-3xl text-white">Newbies Calendar</h1>
        <p className="text-white font-thin text-wrap text-center">
          Rozwiązanie problemu &quot;a wtedy to nie mam czasu&quot;
        </p>
      </div>

      {/* right section */}
      <main className="flex flex-col gap-8 flex-1">
        <CurrentUserCard className={cn("flex self-end mt-4 mr-4", !session && "invisible")} name={session?.name ?? ""}/>

        <div className={"flex flex-col justify-center items-center gap-8 flex-1 lg:justify-center"}>
          <div className="flex flex-col items-center gap-4 pt-4 lg:hidden">
            <p className="text-7xl">🗓️</p>
            <h1 className="font-bold text-2xl">Newbies Calendar</h1>
          </div>

          <EventCreateForm/>
        </div>
      </main>
    </div>
  );
}
