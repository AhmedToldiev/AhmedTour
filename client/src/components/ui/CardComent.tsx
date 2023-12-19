import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { Box, Container, Text } from '@chakra-ui/layout';
import type { CommentType } from '../../types/comment/comment';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteCommentThunk } from '../../redux/slices/comment/commentThunkAction';

export type CardCommentPropsType = {
  oneComment: CommentType;
};

function CardComment({ oneComment }: CardCommentPropsType): JSX.Element {
  const user = useAppSelector((store) => store.authSlice.user);
  const dispatch = useAppDispatch();

  return (
    <Container maxW="container.xl" marginTop="10px">
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        overflow="hidden"
        display="flex"
        flexDirection="column"
        p={4}
      >
        {/* <Avatar src={`http://localhost:3001/img/${user}`} size="sm" /> */}
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          {oneComment?.User?.name}
        </Text>
        <Text fontSize="md" mt={1}>
          {oneComment?.text}
        </Text>
        <Button
          variant="outline"
          colorScheme="red"
          onClick={() => void dispatch(deleteCommentThunk({ id: oneComment.id }))}
        >
          Удалить
        </Button>
      </Box>
    </Container>
  );
}

export default CardComment;