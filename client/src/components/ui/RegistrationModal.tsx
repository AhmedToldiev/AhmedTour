import React from 'react';
import {
  Input,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from '@chakra-ui/react';

export default function InitialFocus(): React.JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Регистрация</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Имя</FormLabel>
              <Input ref={initialRef} placeholder="Введите имя" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Почта</FormLabel>
              <Input placeholder="Введите почту" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Пароль</FormLabel>
              <Input placeholder="Введите пароль" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Повторение пароля</FormLabel>
              <Input placeholder="Повторите пароль" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Зарегистрироваться
            </Button>
            <Button onClick={onClose}>Закрыть</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
