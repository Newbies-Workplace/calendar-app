import {getEvent, joinEvent} from "@/lib/actions"
import {Metadata} from "next";
import React from "react";
import {getSession} from "@/lib/session";
import {redirect} from "next/navigation";

export async function generateMetadata({params}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const slug = (await params).slug
  const event = await getEvent(slug);

  if (!event) {
    return {
      title: 'Brak głosowania',
    };
  }

  return {
    title: event.name,
    description: event.description
  };
}

export default async function EventLayout({children, params}: {
  children: React.ReactNode,
  params: Promise<{ slug: string }>

}) {
  const slug = (await params).slug
  const session = await getSession()
  if (!session) {
    redirect('/')
  }

  const event = await getEvent(slug)
  const users = event?.Users ?? []

  // assert user in event
  if (users.find(u => u.id === session.userId) === undefined) {
    await joinEvent(slug)
  }

  return (
    <>
      {children}
    </>
  )
}
