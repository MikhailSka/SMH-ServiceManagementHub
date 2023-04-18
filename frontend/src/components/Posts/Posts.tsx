import React from 'react'
import { Masonry } from '@mui/lab'
import { Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { useAppSelector } from 'store/hooks'
import { posts } from './data'
import { Post } from 'components/Posts/Post'
import { useStyles } from '../../useStyles'
import { getRandomColor } from '../../hooks/getRandomColor'
import { PostsToolbar } from 'components/Posts/PostsToolbar'

export const Posts: React.FC = () => {
  const theme = useTheme()
  const userData = useAppSelector((state) => state.user.userData)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const classes = useStyles()

  let columns = 3
  if (isSmallScreen) {
    columns = 1
  } else if (isMediumScreen) {
    columns = 2
  }

  return (
    <Container className={classes.box}>
      <PostsToolbar />
      <Masonry columns={columns} spacing={1}>
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            userData={userData}
            backgroundColor={getRandomColor()}
          />
        ))}
      </Masonry>
    </Container>
  )
}
