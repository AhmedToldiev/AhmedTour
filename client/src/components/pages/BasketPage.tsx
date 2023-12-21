import React, { useEffect, useState } from 'react';
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
import Carousel from 'react-bootstrap/Carousel';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkBasDel, thunkBasketLoad } from '../../redux/slices/tour/createAsyncThunk';

export default function BasketPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkBasketLoad());
  }, []);
  const selector = useAppSelector((state) => state.basketSlice.basket);

  const [show, setShow] = useState(false);
  const [dataPage, setDataPage] = useState(0);
  const handleClickButton = (): void => {
    setDataPage((prev) => prev - 1);
  };

  return (
    <div>
      {selector?.map((tour, index) => (
        <Card maxW="sm" style={{ display: 'inline-block', marginLeft: '20px' }}>
          <CardBody>
            <Stack mt="6" spacing="3">
              {/* <img src={tour.Tour.PhotoTour.img1} alt="123" /> */}
              <Carousel style={{ width: '350px', height: '200px' }}>
                <Carousel.Item style={{ width: '350px', height: '200px' }}>
                  <img src={tour.Tour.PhotoTour.img1} />
                </Carousel.Item>
                <Carousel.Item style={{ width: '350px', height: '200px' }}>
                  <img src={tour.Tour.PhotoTour.img2} />
                </Carousel.Item>
                <Carousel.Item style={{ width: '350px', height: '200px' }}>
                  <img src={tour.Tour.PhotoTour.img3} />
                </Carousel.Item>
                <Carousel.Item style={{ width: '350px', height: '200px' }}>
                  <img src={tour.Tour.PhotoTour.img4} />
                </Carousel.Item>
              </Carousel>
              <Heading size="md">{tour.Tour.name}</Heading>
              <Text>{tour.Tour.body}</Text>
              <Text color="blue.600" fontSize="2xl">
                {tour.Tour.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button onClick={() => setShow(true)}
                colorScheme="green"
                bg="green.400"
                rounded="full"
                px={6}
                _hover={{
                  bg: 'green.500',
                }}
                my={4}
              >
                Купить
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Удалить
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
