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
  Select,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addTourModal } from '../../redux/slices/tour/tourSlice';
import { thunkTourAdd } from '../../redux/slices/tour/createAsyncThunk';
import type { AddTourFormData } from '../../types/tour/tour';

export default function AddTourModal(): React.JSX.Element {
  const { onOpen, onClose } = useAppDispatch();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.tourSlice.addTourModalIsOpen);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddTourFormData;
          // console.log(formData);

          void dispatch(thunkTourAdd(formData));
          dispatch(addTourModal());
        }}
      >
        <ModalContent>
          <ModalHeader>Добавить тур</ModalHeader>
          <ModalCloseButton onClick={() => dispatch(addTourModal())} />
          <ModalBody pb={6}>
            <Select placeholder="Регион" name="regionId">
              <option value="1">Тут нужно зделать выбор регионы для тура</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
            </Select>
            <FormControl mt={4}>
              <FormLabel>Название тура</FormLabel>
              <Input placeholder="Введите почту" type="text" name="name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Опписание тура</FormLabel>
              <Input placeholder="Введите пароль" type="text" name="body" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Цена</FormLabel>
              <Input placeholder="Введите пароль" type="number" name="price" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="green" mr={3}>
              Добавить
            </Button>
            <Button onClick={() => dispatch(addTourModal())}>Закрыть</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}
