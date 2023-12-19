import axios from 'axios';
import type { CommentType, CommentTypesFormType } from '../types/comment/comment';


export const apiCommentsInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getComments = async (id: CommentType['id']): Promise<CommentType[]> => {
  const { data } = await apiCommentsInstance<CommentType[]>(`/comments/${id}`);
  return data;
};

export const submitComment = async (
  id: CommentType['id'],
  formData: CommentTypesFormType,
): Promise<CommentType> => {
  const { data } = await apiCommentsInstance.post<CommentType>(`/comments/${id}`, formData);
  return data;
};

export const deleteComment = async (id: CommentType['id']): Promise<CommentType['id']> => {
  await apiCommentsInstance.delete(`/comments/${id}`);
  return id;
};
