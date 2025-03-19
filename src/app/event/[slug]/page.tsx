import {getEvent} from '@/app/actions';
import {UserCard} from '@/components/atoms/userCard';
import {Button} from '@/components/ui/button';
import {HelpCircle, Home} from 'lucide-react';
import {notFound} from 'next/navigation';
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

export default async function EventPage({params}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const event = await getEvent(slug)

  if (!event) {
    return notFound()
  }

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
            <Month year={2025} month={1}/>
            <Month year={2025} month={2}/>
            <Month year={2025} month={3}/>
            <Month year={2025} month={4}/>
            <Month year={2025} month={5}/>
            <Month year={2025} month={6}/>
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
                <UserCard name="John Doe"/>
                <UserCard name="Ja nie"/>
                <UserCard name="On tak"/>
                <UserCard name="On tak tak ta"/>
                <UserCard name="On tak"/>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
