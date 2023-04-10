import React from 'react';
import { IPost } from '../../models/IPost';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

interface PostProps {
  post: IPost;
}

const NoteCard = styled(Card)`
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 16px;
`;

const UserName = styled(Typography)`
  font-size: 0.875rem;
  font-weight: 500;
  color: #757575;
  margin-bottom: 8px;
`;

export const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <NoteCard>
      <CardHeader title={post.title} />
      <CardContent>
        <UserName>User: {post.user_id}</UserName>
        <Typography variant="body2" color="text.primary">
          {post.content}
        </Typography>
      </CardContent>
    </NoteCard>
  );
};