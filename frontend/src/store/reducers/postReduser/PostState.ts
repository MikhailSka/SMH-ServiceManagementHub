import { IPost } from "models/IPost";

export interface PostState {
  posts: IPost[];
  selectedPost: IPost | null;
  isLoading: boolean;
  error: string | null;
}