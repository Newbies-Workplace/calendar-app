'use client';
import {Day} from "@/components/day/day";

export default function Page() {
  return (
    <div className="flex flex-row gap-4 flex-wrap p-8">
      <Day eventId="event-1" votes={[]} dayNumber={1} hidden={false} onClick={() => console.log("Clicked on day 1")} />
      <Day eventId="event-2" votes={[]} dayNumber={2} hidden={true} onClick={() => console.log("Clicked on day 2")} />
      <Day eventId="event-3" votes={[{ userId: "u1", available: true }]} dayNumber={3} hidden={false} onClick={() => console.log("Clicked on day 3")} />
      <Day eventId="event-4" votes={[{ userId: "u1", available: false }]} dayNumber={4} hidden={false} onClick={() => console.log("Clicked on day 4")} />
      <Day eventId="event-5" votes={[{ userId: "u1", available: true }, { userId: "u2", available: false }]} dayNumber={5} hidden={false} onClick={() => console.log("Clicked on day 5")} />
      <Day eventId="event-6" votes={[{ userId: "u1", available: true }, { userId: "u2", available: true }]} dayNumber={6} hidden={false} onClick={() => console.log("Clicked on day 6")} />
      <Day eventId="event-7" votes={[{ userId: "u1", available: false }, { userId: "u2", available: false }]} dayNumber={7} hidden={false} onClick={() => console.log("Clicked on day 7")} />
      <Day eventId="event-8" votes={[{ userId: "u1", available: true }, { userId: "u2", available: false }, { userId: "u3", available: true }]} dayNumber={8} hidden={false} onClick={() => console.log("Clicked on day 8")} />
      <Day eventId="event-9" votes={[{ userId: "u1", available: true }, { userId: "u2", available: true }, { userId: "u3", available: true }, { userId: "u3", available: false }, { userId: "u3", available: true }]} dayNumber={9} hidden={false} onClick={() => console.log("Clicked on day 9")} />
      <Day eventId="event-10" votes={[{ userId: "u1", available: false }, { userId: "u2", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: true }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: true }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }, { userId: "u3", available: false }]} dayNumber={10} hidden={false} onClick={() => console.log("Clicked on day 10")} />
    </div>
  );
}
