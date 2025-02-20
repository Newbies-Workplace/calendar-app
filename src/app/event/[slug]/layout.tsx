import {getEvent} from "@/app/actions"
import {Metadata} from "next";
import {SidebarProvider} from "@/components/ui/sidebar";

export async function generateMetadata({params}: {
  params: { slug: string }
}): Promise<Metadata> {
  const event = await getEvent(params.slug);

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
    <SidebarProvider style={{
      "--sidebar-width": "30rem"
    }}>
      {children}
    </SidebarProvider>
  )
}
