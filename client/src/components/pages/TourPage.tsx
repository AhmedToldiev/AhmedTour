import React, { useEffect } from 'react';
import { Card, CardBody, CardFooter, Stack, Image, Heading, Text, Button } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { setTours } from '../../redux/slices/tour/tourSlice';

import type { TourType } from '../../types/tour/tour';

import { thunkTourDelete } from '../../redux/slices/tour/createAsyncThunk';


export default function ToursPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const { id } = useParams();
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

  return (
    <div>
      {selector.map((tour) => (
        <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
          <Carousel style={{width: '800px'}}>
            <Carousel.Item>
              <img src={tour.PhotoTour.img1} style={{width: '800px'}} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={tour.PhotoTour.img2} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={tour.PhotoTour.img3} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={tour.PhotoTour.img4} />
            </Carousel.Item>
          </Carousel>

          {/* <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src={tour.PhotoTour.img1}
            alt="Caffe Latte"
          /> */}
          {/* <Carousel fade>
            <Carousel.Item>
              <img src={tour.photoTourId.img1} alt='.' />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={tour.photoTourId.img2} alt='.' />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src={tour.photoTourId.img3} alt='.' />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
          <Stack>
            <CardBody>
              <Heading size="md">{tour.name}</Heading>

              <Text py="2">{tour.body}</Text>
           
             
              <Text py="2">{tour.description}</Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="green">
                Подробнее
              </Button>
              <Button variant="solid" colorScheme="blue">
                Изменить
              </Button>
              <Button colorScheme='red' onClick={() => void dispatch(thunkTourDelete(tour.id))}>Удалить</Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </div>
  );
}
