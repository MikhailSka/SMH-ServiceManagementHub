import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updatePost } from 'store/actions/postActions/updatePost';
import { addPost } from 'store/actions/postActions/addPost';
import { useAppDispatch } from 'store/hooks';
import { useAppSelector } from 'store/hooks';
import { IPost } from '../../../models/IPost';

interface UsePostFormProps {
  post?: IPost;
}

export const usePostForm = ({ post }: UsePostFormProps) => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData)
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
      dispatch(updatePost(data));
    } else {
      data.user_id = userData.id
      dispatch(addPost(data));
    }
  };

  return { control, handleSubmit, register, errors, onSubmit };
};