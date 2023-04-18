import React from 'react';
import { Box } from '@mui/material';
import { Grid } from '@mui/material';

import { TitleInput } from 'components/Inputs/Components/TitleInput/TitleInput';
import { ContentInput } from 'components/Inputs/Components/ContentInput/ContentInput';
import { ConfirmButton } from 'components/Buttons/Components/ConfirmButton';
import { usePostForm } from './usePostForm';
import { IPost } from '../../../models/IPost';

interface FormProps {
  post?: IPost;
}

export const PostForm: React.FC<FormProps> = ({ post }) => {
  const { control, handleSubmit, register, errors, onSubmit } = usePostForm({ post });

  return (
    <form>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TitleInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12}>
            <ContentInput control={control} errors={errors} register={register} />
          </Grid>
          <Grid item xs={12} container justifyContent="flex-end">
            <ConfirmButton handleAction={handleSubmit(onSubmit)} />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};