import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import React from 'react'

type PostShowProps = {
    postId: string
}

const PostShow : React.FC<PostShowProps> = async({postId}) => {
    const post = await prisma.post.findUnique({
        where: {id: postId},
    })
    if(!post) notFound();
  return (
    <div>
        <h1 className='font-bold text-2xl my-2'>{post.title}</h1>
        <p className='border rounded p-4'>{post.content}</p>
    </div>
  )
}

export default PostShow