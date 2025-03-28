import {getEvent} from "@/lib/actions"
import {Metadata} from "next";
import React from "react";

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
  const event = await getEvent(slug)

  return (
    <>
      {children}
    </>
  )
}
