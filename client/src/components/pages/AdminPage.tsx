import React, { useEffect } from 'react';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkAllTourLoad } from '../../redux/slices/history/createAsyncThunk';

export default function AdminPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((store) => store.historySlice.history);

  console.log(selector, '----');

  useEffect(() => {
    void dispatch(thunkAllTourLoad());
  }, []);

  return (
    <table style={{ backgroundColor: 'white' }}>
      <thead>
        <tr style={{ backgroundColor: 'black', color: 'white' }}>
          <th>Почта пользователя</th>
          <th>Название тура</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        {selector.map((tour) => (
          <tr key={tour.id}>
            <td>{tour.User.email}</td>
            <td>{tour.Tour.name}</td>
            <td>{tour.Tour.price} ₽</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
