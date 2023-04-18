import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'store/hooks';
//import { createPost, updatePost } from 'store/actions/postActions';
import { IPost } from '../../../models/IPost';

interface UsePostFormProps {
  post?: IPost;
}

export const usePostForm = ({ post }: UsePostFormProps) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<IPost>({
    defaultValues: post,
  });

  useEffect(() => {
    if (post) {
      reset(post);
    }
  }, [post, reset]);

  const onSubmit = (data: IPost) => {
    if (post) {
      data.id = post.id;
      //dispatch(updatePost(data));
    } else {
      //dispatch(createPost(data));
    }
  };

  return { control, handleSubmit, register, errors, onSubmit };
};