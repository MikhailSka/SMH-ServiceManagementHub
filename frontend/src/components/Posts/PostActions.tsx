import React from 'react';
import { useAppDispatch } from 'store/hooks';
import { Grid, Box, Typography } from '@mui/material';

import { IPost } from 'models/IPost';
import { deletePost } from 'store/actions/postActions/deletePost';
import { useDialogContext } from 'components/Dialogs/Context/useDialogContext';
import { TrashButton } from 'components/Buttons/Components/TrashButton';
import { PenButton } from 'components/Buttons/Components/PenButton';
import { DeleteButton } from 'components/Buttons/Components/DeleteButton';
import { PostForm } from 'components/Forms/PostForm/PostForm';

interface PostActionsProps {
  post: IPost;
}

export const PostActions: React.FC<PostActionsProps> = ({ post }) => {
  const { openDialog, closeDialog } = useDialogContext();
  const dispatch = useAppDispatch();

  const handleUpdateButtonClick = () => {
    const content = <PostForm post={post} />;
    const title = 'Update Post';
    openDialog(content, title);
  };

  const handleDeleteButtonClick = () => {
    const content = <DeleteConfirmation post={post} />;
    const title = 'Delete Post';
    openDialog(content, title);
  };

  const DeleteConfirmation: React.FC<{ post: IPost }> = ({ post }) => {
    const handleDelete = () => {
      dispatch(deletePost(post))
      closeDialog();
    };

    return (
      <>
        <Box sx={{ p: 2, py: 2 }}>
          <Grid item xs={12}>
            <Typography variant="body1">
              Are you sure you want to delete this post?
            </Typography>
          </Grid>
        </Box>
        <Grid item xs={12} container justifyContent="flex-end">
          <DeleteButton handleAction={handleDelete} />
        </Grid>
      </>
    );
  };

  return (
    <>
      <PenButton handleAction={handleUpdateButtonClick} />
      <TrashButton handleAction={handleDeleteButtonClick} />
    </>
  );
};