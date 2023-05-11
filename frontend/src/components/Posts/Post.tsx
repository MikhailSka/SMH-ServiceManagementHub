import React, { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  CardActions,
  Divider,
  Tooltip,
} from '@mui/material'

import { IPost } from 'models/IPost'
import { formatDateTime } from 'components/Tables/Common/ColumnsOptions/Date/formatDateTime'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { IUser } from 'models/IUser'
import { getUser } from 'store/actions/userActions/getUser'
import { stringAvatar } from '../../hooks/stringAvatar'
import { PostActions } from './PostActions'

interface PostProps {
  post: IPost
  userData: IUser
  backgroundColor: string
}

export const Post: React.FC<PostProps> = ({
  post,
  userData,
  backgroundColor,
}) => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.user.users)

  const loadUser = async (userId: string) => {
    const user = users.find((user) => user.id === userId)
    if (!user) {
      await dispatch(getUser(userId, false))
    }
  }

  useEffect(() => {
    loadUser(post.user_id)
  }, [post.user_id])

  return (
    <Card sx={{ backgroundColor }}>
      <CardHeader
        avatar={
          <Tooltip title={`name: ${post.user_name}`}>
            <Avatar
              {...stringAvatar(post.user_name)}
              src={users.find((user) => user.id === post.user_id)?.image || ''}
            />
          </Tooltip>
        }
        title={post.title}
        subheader={`${formatDateTime(post.creation_date)}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <Divider />
      {post.user_id === userData.id && (
        <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <PostActions post={post} />
        </CardActions>
      )}
    </Card>
  )
}
