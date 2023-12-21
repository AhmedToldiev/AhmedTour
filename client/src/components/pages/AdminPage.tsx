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
    <>
      {selector.map((tour) => (
        <TableContainer key={tour.id}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>{tour.User.email}</Th>
                <Th>{tour.Tour.name}</Th>
                <Th isNumeric>{tour.Tour.price}</Th>
              </Tr>
            </Thead>
            {/* <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody> */}
          </Table>
        </TableContainer>
      ))}
    </>
  );
}
