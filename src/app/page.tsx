"use client"
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/datePickerWithRange";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createEvent as createEvent } from "@/app/actions";
import { useActionState } from "react";

export default function Home() {
  const [state, formAction, pending] = useActionState(createEvent, { messages: "" });

  return (
    <div className="h-screen flex flex-row">
      {/* left section */}
      <div className="hidden lg:flex flex-col gap-8 flex-1 justify-center items-center bg-neutral-900">
        <p className="text-8xl">🗓️</p>
        <h1 className="font-bold text-3xl text-white">Newbies Calendar</h1>
        <p className="text-white font-thin text-wrap text-center">
          „Umówmy się jak w kalendarzu – ja proponuję dzień, a ty go
          przekreślasz.”
        </p>
      </div>

      {/* right section */}
      <main className="flex flex-col justify-center items-center gap-8 flex-1 lg:justify-center">
        
        <div className="flex flex-col items-center gap-4 pt-4 lg:hidden">
          <p className="text-7xl">🗓️</p>
          <h1 className="font-bold text-2xl">Newbies Calendar</h1>
        </div>
        
        <form action={formAction} className="flex flex-col gap-4">
          
          <h1 className="text-xl lg:text-3xl lg:font-bold text-center font-semibold">Stwórz wydarzenie</h1>

          <div>
            <Label htmlFor="eventName">Nazwa wydarzenia</Label>
            <Input
              name="eventName"
              type="text"
              placeholder="Urodziny Basi 🎉"
            />
          </div>

          <div>
            <Label htmlFor="eventName">Opis wydarzenia</Label>
            <Textarea
              name="eventDescription"
              className="resize-none h-20"
              placeholder="Przyjdźcie z 🎁 (Opcjonalne)"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="eventName">Zakres wydarzenia</Label>
            <DatePickerWithRange name="eventTimeFrame"/>
          </div>

          <div>
            <Label htmlFor="eventName">Nazwa użytkownika</Label>
            <Input
              name="userName"
              type="userName"
              placeholder="Asia 🌸"
            />
          </div>

          <Button type="submit" disabled={pending}>Szukaj terminów</Button>
          {state?.messages && <p className="text-red-500">{state.messages}</p>}
        </form>
      </main>
    </div>
  );
}
