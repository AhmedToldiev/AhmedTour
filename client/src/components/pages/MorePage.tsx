import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Grid,
} from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import type { TourType } from '../../types/tour/tour';
import { setTours } from '../../redux/slices/tour/tourSlice';
import CardCommentList from '../ui/CardCommentList';
import AddFormComment from '../ui/AddFormComment';

export default function MorePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    console.log(typeof id);
    axios
      .get<TourType[]>(`http://localhost:3000/api/region/tours/more/${id}`)
      .then(({ data }) => {
        dispatch(setTours(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, id]);

  const onepage = useAppSelector((store) => store.tourSlice.tours).filter(
    (el) => el.id === Number(id),
  );
  console.log('aydishnik', onepage);

  //   return <div>{onepage[0]?.name}</div>;

  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
      {/* <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={onepage[0]?.PhotoTour.img1}
        alt="Caffe Latte"
      /> */}

      <Carousel style={{ width: '800px', height: '350px' }}>
        <Carousel.Item style={{ width: '600px', height: '350px' }}>
          <img src={onepage[0]?.PhotoTour.img1} alt="123" />
        </Carousel.Item>
        <Carousel.Item style={{ width: '600px', height: '350px' }}>
          <img src={onepage[0]?.PhotoTour.img2} alt="123" />
        </Carousel.Item>
        <Carousel.Item style={{ width: '600px', height: '350px' }}>

          <img src={onepage[0]?.PhotoTour.img3} alt="123" />
        </Carousel.Item>
        <Carousel.Item style={{ width: '600px', height: '350px' }}>
          <img src={onepage[0]?.PhotoTour.img4} alt="123" />
        </Carousel.Item>
      </Carousel>

      <Stack>
        <CardBody>
          <Heading size="md">{onepage[0]?.name}</Heading>

          <Text py="2">{onepage[0]?.body}</Text>
          <Text py="2">{onepage[0]?.description}</Text>
        </CardBody>

        <CardFooter>
          {/* <Button variant="solid" colorScheme="blue">
            Buy Latte
          </Button> */}
        </CardFooter>
        <Grid templateColumns="1fr" gap={4}>
          <Grid item>
            <CardCommentList />
          </Grid>
          <Grid item>
            <AddFormComment />
          </Grid>
        </Grid>
      </Stack>
    </Card>
  );
}
