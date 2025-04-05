import {getEvent, setVote} from '@/lib/actions';
import {UserCard} from '@/components/atoms/userCard';
import {Button} from '@/components/ui/button';
import {HelpCircle, Home} from 'lucide-react';
import {notFound, redirect} from 'next/navigation';
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger
} from "@/components/ui/sidebar";
import Link from "next/link";
import {ShareLinkButton} from "@/app/event/[slug]/shareLinkButton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {Month} from "@/components/atoms/month";
import {ScrollArea} from "@/components/ui/scroll-area";
import dayjs from "dayjs";
import {getSession} from "@/lib/session";

export default async function EventPage({params}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const event = await getEvent(slug)
  const session = await getSession()

  if (!session) {
    return redirect('/')
  }
  if (!event) {
    return notFound()
  }

  const startDate = dayjs(event.startDate);
  const endDate = dayjs(event.endDate);

  const repeats =
    (endDate.year() - startDate.year()) * 12 +
    (endDate.month() - startDate.month()) + 1;

  return (
    <SidebarProvider
      className={"bg-gray-200 h-screen"}
      style={{
        // @ts-expect-error aaa
        "--sidebar-width": "30rem"
      }}>
      <SidebarInset className={"bg-gray-200"}>
        <header className='flex justify-between items-center p-2 bg-gray-200'>
          <Button variant="outline" size="icon" asChild>
            <Link href={'/'}>
              <Home/>
            </Link>
          </Button>

          <div className='flex justify-center gap-2'>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <HelpCircle/>
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Pomoc</DialogTitle>
                  <DialogDescription>To do</DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button>Ok</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <ShareLinkButton/>

            <SidebarTrigger className={"h-9 w-9"} variant={'outline'}/>
          </div>
        </header>

        <ScrollArea type={"always"}>
          <main className={"flex flex-1 justify-center items-center flex-col h-full p-2 space-y-8 overflow-hidden"}>
            {[...Array(repeats)].map((_, i) => {
              const month = startDate.add(i + 1, 'month');

              return (
                <Month
                  key={i}
                  year={month.year()}
                  month={month.month()}
                  currentUserId={session.userId}
                  votes={event.Votes}
                  onDayClick={async (date, available) => {
                    "use server"

                    await setVote(slug, date, available ? "AVAILABLE" : "NOT_AVAILABLE")
                  }}/>
              )
            })}
          </main>
        </ScrollArea>
      </SidebarInset>

      <Sidebar side={'right'} variant={'floating'}>
        <SidebarHeader>
          <h1>{event.name}</h1>
          <p>{event.description}</p>
        </SidebarHeader>
        <SidebarSeparator/>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>
              Uczestnicy
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className={"flex flex-col gap-1"}>
                {event.Users.map((user) => (
                  <UserCard key={user.id} name={user.name}/>
                ))}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
