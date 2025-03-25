import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'

const PostList = () => {
  return (
    <div>
        {
            [1,2].map((post) => (
                <Card key={post}>
                    <CardHeader>
                        <CardTitle>DSa new post</CardTitle>
                    </CardHeader>
                </Card>
            ))
        }
    </div>
  )
}

export default PostList