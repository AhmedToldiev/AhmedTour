import { createAsyncThunk } from '@reduxjs/toolkit';

import type { CommentType, CommentTypesFormType } from '../../../types/comment/comment';
import { deleteComment, getComments, submitComment } from '../../../services/commentService';

export const getCommentsThunk = createAsyncThunk<CommentType[], CommentType['id']>(
  '/Comment/getCommentThunk',
  async (id) => getComments(id),
);
export const addCommentThunk = createAsyncThunk<
  CommentType,
  { id: CommentType['id']; formData: CommentTypesFormType }
>('/Comment/addCommentThunk', async ({ id, formData }) => submitComment(id, formData));

export const deleteCommentThunk = createAsyncThunk<CommentType['id'], { id: CommentType['id'] }>(
  '/Comment/deleteCommentThunk',
  async ({ id }) => deleteComment(id),
);
