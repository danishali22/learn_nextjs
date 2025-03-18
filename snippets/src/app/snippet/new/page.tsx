"use client"

import React, { useActionState } from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import * as actions from "@/actions"


const CreateSnippetPage = () => {

  const [formStateData, xyz] = useActionState(actions.createSnippet, { message: "" });

  return (
    <form action={xyz} className='space-y-5'>
      <div>
        <Label htmlFor='title'>Title</Label>
        <Input type='text' name="title" id="title" />
      </div>
      <div>
        <Label htmlFor='code'>Code</Label>
        <Textarea name="code" id="code" />
      </div>
      {formStateData.message && <div className='p-2 bg-red-400 border-2 border-red-500 text-white rounded-md mt-2'>{formStateData.message}</div>}
      <Button type='submit'>New</Button>
    </form>
  );
}

export default CreateSnippetPage