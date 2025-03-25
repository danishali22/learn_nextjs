import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { PostWithData } from '@/lib/query/post'

type PostListProps = {
    fetchData: () => Promise<PostWithData[]>
}

const PostList : React.FC<PostListProps> = async ({fetchData}) => {
    const posts = await fetchData();
  return (
    <div>
        {
            posts.map((post) => (
                <Card key={post.id}>
                    <CardHeader>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription className='flex items-center justify-between'>
                            <h3>By {post.user?.name}</h3>
                            <h3>{post._count.comments} comments</h3>
                        </CardDescription>
                    </CardHeader>
                </Card>
            ))
        }
    </div>
  )
}

export default PostList