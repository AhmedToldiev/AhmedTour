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
import Carousel from 'react-bootstrap/Carousel';
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
      {selector?.map((tour, index) => (
        <Card maxW="sm">
          <CardBody>
            <Stack mt="6" spacing="3">
              {/* <img src={tour.Tour.PhotoTour.img1} alt="123" /> */}
              <Carousel style={{ width: '500px', height: '300px' }}>
                <Carousel.Item style={{ width: '500px', height: '380px' }}>
                  <img src={tour.Tour.PhotoTour.img1} />
                </Carousel.Item>
                <Carousel.Item style={{ width: '500px', height: '380px' }}>
                  <img src={tour.Tour.PhotoTour.img2} />
                </Carousel.Item>
                <Carousel.Item style={{ width: '500px', height: '380px' }}>
                  <img src={tour.Tour.PhotoTour.img3} />
                </Carousel.Item>
                <Carousel.Item style={{ width: '500px', height: '380px' }}>
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