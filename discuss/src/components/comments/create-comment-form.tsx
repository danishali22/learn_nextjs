"use client"

import React, { useActionState, useState } from 'react'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { createComment } from '@/actions/create-comment'
import { Loader2 } from 'lucide-react'

type CreateCommentFormProps = {
    postId: string,
    parentId?: string,
    startOpen?: boolean,
}

const CreateCommentForm : React.FC<CreateCommentFormProps> = ({postId, parentId, startOpen}) => {
    const [open, setOpen] = useState(startOpen);
    const [formState, action, isPending] = useActionState(createComment.bind(null, {postId, parentId}), {errors:{}});
  return (
    <div>
      <Button size={"sm"} variant={"link"} className='cursor-pointer' onClick={() => setOpen(!open)}>
        Reply
      </Button>
      {open && (
        <form action={action} className="space-y-2">
          <Textarea
            name='content'
            placeholder="write a comment..."
            className="bg-gray-100 focus-visible:ring-0"
          />
          {formState.errors.content && <p className="text-red-500 text-sm">{formState.errors.content.join(", ")}</p>}
          {formState.errors.formError && <div className="bg-red-200 border-red-600 text-sm p-2">{formState.errors.formError.join(", ")}</div>}
          <Button disabled={isPending} size={"sm"} variant={"secondary"}>
            {
                isPending ? (
                    <>
                        <Loader2 /> Please Wait
                    </>
                ) : "Save"
            }
          </Button>
        </form>
      )}
    </div>
  );
}

export default CreateCommentForm