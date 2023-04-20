import React from 'react'
import { Box, Typography, Divider } from '@mui/material';

import { NewPostButton } from 'components/Buttons/Components/NewPostButton'
import { useDialogContext } from 'components/Dialogs/Context/useDialogContext'
import { PostForm } from 'components/Forms/PostForm/PostForm'

export const PostsToolbar: React.FC = () => {
  const { openDialog } = useDialogContext()

  const handleAddButtonClick = () => {
    const content = <PostForm />
    const title = 'Add Post'
    openDialog(content, title)
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
        mb={2}
      >
        <Typography variant="h4" component="h1">
          Posts List
        </Typography>
        <NewPostButton handleAction={handleAddButtonClick} />
      </Box>
      <Divider sx={{ margin: 1 }} />
    </>
  )
}
