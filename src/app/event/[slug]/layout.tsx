export default async function EventLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: Promise<{ slug: string }>

}) {
    const slug = (await params).slug

    return (
        <div>
            {children}
        </div>
    )
}