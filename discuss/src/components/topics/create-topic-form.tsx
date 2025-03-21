"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { createTopic } from "@/actions/create-topic";
import { useActionState } from "react";

export function CreateTopicForm() {
  const [formState, action] = useActionState(createTopic, {errors: {}});
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">New Topic</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={action}>
          <DialogHeader>
            <DialogTitle>Create a Topic</DialogTitle>
            <DialogDescription>
              Write a new topic to start a discussion. Click save when
              you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" />
            </div>
            {formState.errors.name && (
              <p className="text-sm text-red-500">{formState.errors.name}</p>
            )}
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" />
            </div>
            {formState.errors.description && (
              <p className="text-sm text-red-500">
                {formState.errors.description}
              </p>
            )}
            {formState.errors.formError && (
              <div className="border border-red-500 bg-red-200">
                {formState.errors.formError}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTopicForm;