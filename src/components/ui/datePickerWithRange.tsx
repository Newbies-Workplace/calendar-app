"use client"

import * as React from "react"
import {addDays, format} from "date-fns"
import {CalendarIcon} from "lucide-react"
import {DateRange} from "react-day-picker"
import {pl} from "date-fns/locale";
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"

export function DatePickerWithRange({
  className,
  name,
}: React.HTMLAttributes<HTMLDivElement> & { name?: string }) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <input readOnly type="text" className="hidden" value={date?.from?.toISOString()} name={name+"From"} />
      <input readOnly type="text" className="hidden" value={date?.to?.toISOString()} name={name+"To"} />

      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y", {locale: pl})} -{" "}
                  {format(date.to, "LLL dd, y", {locale: pl})}
                </>
              ) : (
                format(date.from, "LLL dd, y", {locale: pl})
              )
            ) : (
              <span>Wybierz datę</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            locale={pl}
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
