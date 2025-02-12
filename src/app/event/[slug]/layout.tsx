import { getEvent } from "@/app/actions"

export default async function EventLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: Promise<{ slug: string }>

}) {
    const slug = (await params).slug
    const event = await getEvent(slug)

    return (
        <div>
            {children}
        </div>
    )
}