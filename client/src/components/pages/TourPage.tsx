import React, { useEffect } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  Button,
  StatLabel,
  StatNumber,
  Stat,
  DividerProps,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { editTourModal, setSelectedTour, setTours } from '../../redux/slices/tour/tourSlice';

import type { TourType } from '../../types/tour/tour';
import { thunkAddBasket, thunkTourDelete } from '../../redux/slices/tour/createAsyncThunk';

export default function ToursPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.authSlice.user);
  const addToBasket = async (e, id) => {
    e.preventDefault();
    console.log('111111', id);
    console.log('basket', id);
    void dispatch(thunkAddBasket({ tourId: id }));
  };

  const { id } = useParams();
  useEffect(() => {
    // console.log(id);
    axios
      .get<TourType[]>(`http://localhost:3000/api/region/tours/${id}`)
      .then(({ data }) => {
        dispatch(setTours(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const selector = useAppSelector((tour) => tour.tourSlice.tours);
  // const tourId = useAppSelector((region)=> region.regionSlice.regions)
  console.log(selector);

  console.log('CARD WITH BUTTON');
  // PhotoTour.img1

  const handleMoreClick = (id) => {
    window.location.href = `/more/${id}`;
  };

  const handleBasketClick = () => {
    window.location.href = `/basket`;
  };
  console.log(selector, 'sdhkjgfdhjkfbxghjhfdbhjgfbjgf');

  return (
    <div>
      {selector?.map((tour) => (
        <>
          {/* {console.log(tour, '============')} */}

          <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
            <Carousel style={{ width: '600px', height: '300px' }}>
              <Carousel.Item style={{ width: '600px', height: '380px' }}>
                <img src={tour.PhotoTour.img1} alt="12" />
              </Carousel.Item>
              <Carousel.Item style={{ width: '600px', height: '380px' }}>
                <img src={tour.PhotoTour.img2} alt="12" />
              </Carousel.Item>
              <Carousel.Item style={{ width: '600px', height: '380px' }}>
                <img src={tour.PhotoTour.img3} alt="12" />
              </Carousel.Item>
              <Carousel.Item style={{ width: '600px', height: '380px' }}>
                <img src={tour.PhotoTour.img4} alt="12" />
              </Carousel.Item>
            </Carousel>

            <Stack>
              <CardBody>
                <Heading size="md">{tour.name}</Heading>

                <Text py="2">{tour.body}</Text>
                <Stat>
                  <StatLabel>Цена:</StatLabel>
                  <StatNumber>{`${tour.price}₽`}</StatNumber>
                </Stat>
                {/* <Text py="2">{tour.description}</Text> */}
              </CardBody>

              <CardFooter>
                <Button
                  onClick={(event) => {
                    addToBasket(event, tour.id);
                  }}
                  variant="solid"
                  colorScheme="blue"
                >
                  Добавить в корзину
                </Button>
                <Button
                  variant="ghost"
                  colorScheme="green"
                  onClick={() => handleMoreClick(tour.id)}
                >
                  Подробнее
                </Button>
                {auth.roleId === 1 ? (
                  <>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      onClick={() => {
                        void dispatch(setSelectedTour(tour));
                        dispatch(editTourModal());
                      }}
                    >
                      Изменить
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="red"
                      onClick={() => void dispatch(thunkTourDelete(tour.id))}
                    >
                      Удалить
                    </Button>
                  </>
                ) : (
                  <div />
                )}
              </CardFooter>
            </Stack>
          </Card>
        </>
      ))}
    </div>
  );
}
