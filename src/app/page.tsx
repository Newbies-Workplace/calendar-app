import {EventCreateForm} from "@/components/forms/eventCreateForm";

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

        <EventCreateForm/>
      </main>
    </div>
  );
}
