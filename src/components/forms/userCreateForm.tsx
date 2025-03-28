"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React, {startTransition, useActionState} from "react";
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
import {cn} from "@/lib/utils";

export const UserCreateForm = ({}) => {
  const [state, formAction, pending] = useActionState(createUser, {errors: {}});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-expect-error target is HTMLFormElement
    const formData = new FormData(e.target);
    startTransition(() => formAction(formData));
  }

  return (
    <AlertDialog open>
      <AlertDialogContent>
        <form onSubmit={handleSubmit}>
          <AlertDialogHeader>
            <AlertDialogTitle>Zanim zaczniemy</AlertDialogTitle>
            <AlertDialogDescription>Powiedz nam kim jesteś</AlertDialogDescription>
          </AlertDialogHeader>

          <div className={"flex flex-row gap-4 py-4 items-center"}>
            <div className={"size-12 rounded-full bg-gray-300"}/>

            <div className={"flex-1"}>
              <Label htmlFor={"name"}>Twoje imię</Label>
              <Input name={"name"} placeholder={"Mechaniczna owca"} className={cn(state?.errors?.name && "border-red-500")}/>
              {state?.errors?.name && <p className="text-sm text-red-500">{state.errors.name}</p>}
            </div>
          </div>

          <AlertDialogFooter>
            <div className={"flex-col gap-4"}>
              <Button disabled={pending} type={"submit"}>Gotowe</Button>
            </div>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
