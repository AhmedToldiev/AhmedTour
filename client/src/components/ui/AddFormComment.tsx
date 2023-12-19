import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { CommentTypesFormType } from '../../types/comment/comment';
import { addCommentThunk } from '../../redux/slices/comment/commentThunkAction';

export default function AddFormComment(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.commentSlice);
  const [inputs, setInputs] = useState<CommentTypesFormType>({
    text: '',
  });

  const { id } = useParams();

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Card style={{ maxHeight: 'auto', maxWidth: 600 }}>
      <Form style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }} >
        <Form.Control
          type="text"
          name="body"
          placeholder="Введите комментарий"
          // value={inputs.text}
          onChange={(e) => {
            e.preventDefault(); // Prevent default form submission
            changeHandler(e);
           
          }}
          style={{ marginBottom: '1rem' }}
          />
        <Button
          variant="outline-secondary"
          size="lg"
          onClick={(e) => {
            void dispatch(addCommentThunk({ id: Number(id), formData: inputs }));
            setInputs({ text: '' });
            e.target.reset();
          }}
          >
          Send
        </Button>
      </Form>
    </Card>
  );
}
