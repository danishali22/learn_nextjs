import CommentList from '@/components/comments/comment-list';
import CreateCommentForm from '@/components/comments/create-comment-form';
import PostShow from '@/components/posts/post-show';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type PostShowPageProps = {
    params: Promise<{slug: string, postId: string}>
}

const PostShowPage : React.FC<PostShowPageProps> = async({params}) => {
    const {slug, postId} = (await params);
  return (
    <div className='sapce-y-3'> 
        <Link href={`/topics/${slug}`}>
            <Button variant={"link"}>
                <ChevronLeft /> Back to {slug}
            </Button>
        </Link>
        <PostShow postId={postId} /> 
        <CreateCommentForm postId={postId} startOpen />
        <CommentList postId={postId} />
    </div>
  )
}

export default PostShowPage