"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React, {useActionState} from "react";
import {Label} from "@/components/ui/label";
import {createUser} from "@/lib/actions";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

export const UserCreateForm = ({}) => {
  const [state, formAction, pending] = useActionState(createUser, {messages: ""});

  return (
    <AlertDialog open>
      <AlertDialogContent>
        <form action={formAction}>
          <AlertDialogHeader>
            <AlertDialogTitle>Zanim zaczniemy</AlertDialogTitle>
            <AlertDialogDescription>Powiedz nam kim jesteś</AlertDialogDescription>
          </AlertDialogHeader>

          <div className={"flex flex-row gap-4 py-4 items-center"}>
            <div className={"size-12 rounded-full bg-gray-300"}/>

            <div className={"flex-1"}>
              <Label htmlFor={"name"}>Twoje imię</Label>
              <Input name={"name"} placeholder={"Mechaniczna owca"}/>
            </div>
          </div>

          <AlertDialogFooter>
            <div className={"flex-col gap-4"}>
              <Button disabled={pending} type={"submit"}>Gotowe</Button>

              {state?.messages && <p className="text-red-500">{state.messages}</p>}
            </div>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
