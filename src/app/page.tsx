import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/ui/datePickerWithRange";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
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
        
        <form action="" className="flex flex-col gap-4">
          
          <h1 className="text-xl lg:text-3xl lg:font-bold text-center font-semibold">Stwórz wydarzenie</h1>

          <div>
            <Label htmlFor="eventName">Nazwa wydarzenia</Label>
            <Input
              id="eventName"
              type="eventName"
              placeholder="Urodziny Basi 🎉"
            />
          </div>

          <div>
            <Label htmlFor="eventName">Opis wydarzenia</Label>
            <Textarea
              id="eventDescription"
              className="resize-none h-20"
              placeholder="Przyjdźcie z 🎁 (Opcjonalne)"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="eventName">Zakres wydarzenia</Label>
            <DatePickerWithRange/>
          </div>

          <div>
            <Label htmlFor="eventName">Nazwa użytkownika</Label>
            <Input
              id="userName"
              type="userName"
              placeholder="Asia 🌸"
            />
          </div>

          <Button type="submit">Szukaj terminów</Button>
        </form>
      </main>
    </div>
  );
}
