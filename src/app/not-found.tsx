import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Newbies Calendar - 404',
    description: 'Newbies Calendar - This page does not exists.',
  }
  

export default function NotFound() {
    return (
      <div className="flex justify-center items-center flex-col h-screen">
        <p className="text-6xl pt-4 pb-8">4️⃣0️⃣4️⃣ = 🗓️💀</p>
        <p className="text-xl font-medium pb-2">Could not find requested resource</p>
        <Link className="text-xl font-normal text-blue-500" href="/">Return Home</Link>
      </div>
    )
  }
