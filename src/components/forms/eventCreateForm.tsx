"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {DatePickerWithRange} from "@/components/ui/datePickerWithRange";
import {Button} from "@/components/ui/button";
import {useActionState} from "react";
import {createEvent} from "@/app/actions";

export const EventCreateForm = () => {
  const [state, formAction, pending] = useActionState(createEvent, {messages: ""});

  return (
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
  )
}
