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

export default async function EventPage({params}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const event = await getEvent(slug)

    if (!event) {
        return notFound()
    }

    return (
      <div className="flex flex-row h-screen w-full bg-gray-200 ">
          <div className='flex flex-col h-full w-full'>
              <div className='flex justify-between items-center p-2'>
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

                      <SidebarTrigger className={"h-9 w-9 md:hidden"} variant={'outline'}/>
                  </div>
              </div>

              <div className='flex-col overflow-y-auto no-scrollbar space-y-2'>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
                  <div className='size-24 bg-green-400'/>
              </div>
          </div>

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
      </div>
    );
};
