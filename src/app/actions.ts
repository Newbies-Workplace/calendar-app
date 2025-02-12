'use server'

import { prisma } from '@/db/prisma'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import dayjs from 'dayjs'

const UserCreateSchema = z.object({
    name: z.string().min(1).max(50),
})

export const createUser = async (form: FormData) => {
    const validatedForm = UserCreateSchema.safeParse(form)

    if (!validatedForm.success) {
        return {
            errors: validatedForm.error.flatten().fieldErrors,
        }
    }

    await prisma.user.create({
        data: {
            name: validatedForm.data.name,
        }
    })

}

const EventCreateSchema = z.object({
    eventName: z.string().min(1).max(255),
    eventDescription: z.string().max(255).optional(),
    eventTimeFrame: z.object({
        start: z.date(),
        end: z.date(),
    })
    .refine(({ start, end }) => start < end, {
        message: 'Start date must be before end date',
    }),
})

export const createEvent = async (prevState: any, formData: FormData) => {
    const validatedForm = EventCreateSchema.safeParse({
        eventName: formData.get('eventName'),
        eventDescription: formData.get('eventDescription'),
        eventTimeFrame: {
            start: dayjs(formData.get('eventTimeFrameFrom') as string).toDate(),
            end: dayjs(formData.get('eventTimeFrameTo') as string).toDate(),
        }
    })

    if (!validatedForm.success) {
        return {
            messages: JSON.stringify(validatedForm.error.flatten().fieldErrors),
        }
    }


    const createdEvent = await prisma.event.create({
        data: {
            name: validatedForm.data.eventName,
            description: validatedForm.data.eventDescription,
            startDate: validatedForm.data.eventTimeFrame.start,
            endDate: validatedForm.data.eventTimeFrame.end,
            ownerId: "f7db8405-81d5-448d-8e99-fb91928171d8"
        },
        select: {
            id: true,
        }
    })

    redirect(`/event/${createdEvent.id}`)
}

export const getEvent = async (id: string) => {
    return prisma.event.findUnique({
        where: {
            id,
        }
    })
}