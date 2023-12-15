import React, { useEffect } from 'react';
import { Card, CardBody, CardFooter, Stack, Image, Heading, Text, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { TourType } from '../../types/tour/tour';
import { setTours } from '../../redux/slices/tour/tourSlice';

export default function ToursPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  // useEffect -> axios -> туры с вышеуказанным region id
  useEffect(() => {
    console.log(id);
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
  // PhotoTour.img1
  return (
    <div>
      {selector.map((tour) => (
        <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src={tour.PhotoTour.img1}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">{tour.name}</Heading>

              <Text py="2">{tour.body}</Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </div>
  );
}
