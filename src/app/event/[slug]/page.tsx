import { getEvent } from '@/app/actions';
import { UserCard } from '@/components/atoms/userCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, HelpCircle, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function EventPage({
    params
}: {
    params: Promise<{
        slug: string;
    }>
}) {
    const slug = (await params).slug
    const event = await getEvent(slug)

    if (!event) {
        return notFound()
    }

    return (
        <div className="flex flex-row h-screen">
            <div className='flex flex-col h-full w-2/3'>
                <div className='flex justify-between items-center bg-gray-200 p-2'>
                    <Button variant="outline" size="icon">
                        <ChevronLeft />
                    </Button>

                    <div className='flex justify-center gap-2'>
                        <Button variant="outline" size="icon">
                            <HelpCircle />
                        </Button>
                        <Button variant="outline" size="icon">
                            <Share2 />
                        </Button>

                    </div>
                </div>

                <div className='flex-col bg-gray-100 overflow-y-auto space-y-2'>
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                    <div className='size-24 bg-green-400' />
                </div>
            </div>

            <div className='flex flex-col h-full w-1/3 bg-gray-300 p-2 gap-2'>
                <h1>{event.name}</h1>
                <p>{event.description}</p>

                <h1>Uczestnicy</h1>
                <div className='flex flex-row flex-wrap gap-2'>
                    <UserCard name="John Doe" />
                    <UserCard name="Ja nie" />
                    <UserCard name="On tak" />
                    <UserCard name="On tak tak ta" />
                    <UserCard name="On tak" />
                </div>
            </div>
        </div>
    );
};
