"use client"

import { Editor } from '@monaco-editor/react';
import React, { useState } from 'react'
import type { Snippet } from '@prisma/client';
import { Button } from './ui/button';
import { saveSnippet } from '@/actions';

const EditSnippetForm = ({snippet}: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);

  // we can't use "use server" and server actions here because we are inside client component
  // async function saveSnippet(){
  //   "use server"
  // }

  const changeEventHandler = (value: string = "") => {
    setCode(value);
  }

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <form action={saveSnippetAction} className='flex items-center justify-between mb-5'>
        <h1 className='text-xl font-bold'>Your Code Editor</h1>
        <Button type='submit'>Save</Button>
      </form>
      <Editor
        height="40vh"
        theme='vs-dark'
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEventHandler}
      />
    </div>
  );
};

export default EditSnippetForm