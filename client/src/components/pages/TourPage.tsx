import React, { useEffect } from 'react';
import { Card, CardBody, CardFooter, Stack, Image, Heading, Text, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { editTourModal, setSelectedTour, setTours } from '../../redux/slices/tour/tourSlice';

import type { TourType } from '../../types/tour/tour';

import { thunkTourDelete } from '../../redux/slices/tour/createAsyncThunk';

export default function ToursPage(): JSX.Element {
  const dispatch = useAppDispatch();

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

  const handleMoreClick = (id) => {
    window.location.href = `/more/${id}`;
  };

  return (
    <div>
      {selector?.map((tour) => (<>
        {console.log(tour, '============')}
        
        <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
          <Carousel style={{ width: '600px', height: '300px' }}>
            <Carousel.Item style={{ width: '600px', height: '380px' }}>
              <img src={tour.PhotoTour.img1} />
            </Carousel.Item>
            <Carousel.Item style={{ width: '600px', height: '380px' }}>
              <img src={tour.PhotoTour.img2} />
            </Carousel.Item>
            <Carousel.Item style={{ width: '600px', height: '380px' }}>
              <img src={tour.PhotoTour.img3} />
            </Carousel.Item>
            <Carousel.Item style={{ width: '600px', height: '380px' }}>
              <img src={tour.PhotoTour.img4} />
            </Carousel.Item>
          </Carousel>

          <Stack>
            <CardBody>
              <Heading size="md">{tour.name}</Heading>

              <Text py="2">{tour.body}</Text>

              {/* <Text py="2">{tour.description}</Text> */}
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="green" onClick={() => handleMoreClick(tour.id)}>
                Подробнее
              </Button>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() =>{ void dispatch(setSelectedTour(tour))
                  dispatch(editTourModal())
                }}
                >
                Изменить
              </Button>
              <Button colorScheme="red" onClick={() => void dispatch(thunkTourDelete(tour.id))}>
                Удалить
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </>
      ))}
    </div>
  );
}
