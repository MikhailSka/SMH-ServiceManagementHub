import React from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar, CardActions, Divider } from '@mui/material';

import { IPost } from 'models/IPost';
import { UserData } from 'store/reducers/userReducer/UserState';
import { PostActions } from './PostActions';

interface PostProps {
  post: IPost;
  userData: UserData;
  backgroundColor: string;
}

export const Post: React.FC<PostProps> = ({ post, userData, backgroundColor }) => {
  return (
    <Card sx={{ backgroundColor }}>
      <CardHeader
        avatar={<Avatar alt={post.user_name} src={post.image} />}
        title={post.title}
        subheader={`by ${post.user_name} | ${post.creation_date}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent><Divider/>
      {post.user_id === userData.id && (
        <CardActions style={{display: 'flex', justifyContent: 'flex-end'}}>
          <PostActions post={post} />
        </CardActions>
      )}
    </Card>
  );
};