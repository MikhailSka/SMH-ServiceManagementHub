import React, { useEffect } from 'react'
import { Masonry } from '@mui/lab'
import { Box, CircularProgress, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { Post } from 'components/Posts/Post'
import { useStyles } from '../../useStyles'
import { useAppDispatch } from 'store/hooks'
import { useAppSelector } from 'store/hooks'
import { getRandomColor } from '../../hooks/getRandomColor'
import { PostsToolbar } from 'components/Posts/PostsToolbar'
import { getPosts } from 'store/actions/tableActions/postActions/getPosts'

export const Posts: React.FC = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const userData = useAppSelector((state) => state.user.userData)
  const { isLoading, posts } = useAppSelector((state) => state.post)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const classes = useStyles()

  let columns = 3
  if (isSmallScreen) {
    columns = 1
  } else if (isMediumScreen) {
    columns = 2
  }

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <Box className={classes.xlBox} sx={{ padding: '10px' }}>
      <PostsToolbar />

      {isLoading ? (
        <Typography
          variant="body1"
          className={classes.loading}
          component={'div'}
        >
          <CircularProgress />
        </Typography>
      ) : posts.length != 0 ? (
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
      ) : (
        <Typography
          variant="h4"
          className={classes.loading}
          margin={10}
          component={'div'}
        >
          There is no posts, add one ;)
        </Typography>
      )}
    </Box>
  )
}
