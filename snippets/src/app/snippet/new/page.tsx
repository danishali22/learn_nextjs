import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

async function createSnippet(formData:FormData) {
    "use server"
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
        data: {
            title,
            code,
        }
    });

    console.log("Created snippet", snippet);
    redirect("/");   // only work for server component not work for client component
}


const CreateSnippetPage = () => {
  return (
    <form action={createSnippet} className='space-y-5'>
      <div>
        <Label htmlFor='title'>Title</Label>
        <Input type='text' name="title" id="title" />
      </div>
      <div>
        <Label htmlFor='code'>Code</Label>
        <Textarea name="code" id="code" />
      </div>
      <Button type='submit'>New</Button>
    </form>
  );
}

export default CreateSnippetPage