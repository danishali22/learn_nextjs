"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const CreateCommentForm = () => {
    const [open, setOpen] = useState(true);
  return (
    <div>
      <Button size={"sm"} variant={"link"} className='cursor-pointer' onClick={() => setOpen(!open)}>
        Reply
      </Button>
      {open && (
        <form action="" className="space-y-2">
          <Textarea
            placeholder="write a comment..."
            className="bg-gray-100 focus-visible:ring-0"
          />
          <Button size={"sm"} variant={"secondary"}>
            Save
          </Button>
        </form>
      )}
    </div>
  );
}

export default CreateCommentForm