import React, { useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkBasketLoad } from '../../redux/slices/tour/createAsyncThunk';

export default function BasketPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkBasketLoad());
  }, []);
  const selector = useAppSelector((state) => state.basketSlice.basket);
  console.log(selector, 222222);

  return (
    <div>
      {selector?.map((tour) => (
        <Card maxW="sm">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{tour.Tour.name}</Heading>
              <Text>
               {tour.Tour.body}
              </Text>
              <Text color="blue.600" fontSize="2xl">
                {tour.Tour.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
