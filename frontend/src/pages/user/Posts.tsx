import React from 'react'
import { styled } from '@mui/system'

import { posts } from 'components/Posts/posts'
import { Post } from 'components/Posts/Post'

const PostsContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Posts: React.FC = () => {
  return (
      <PostsContainer>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </PostsContainer>
  )
}

export default Posts
