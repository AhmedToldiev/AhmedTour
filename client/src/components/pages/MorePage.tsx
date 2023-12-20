import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardBody, Stack, Heading, Text, Grid } from '@chakra-ui/react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import type { TourType } from '../../types/tour/tour';
import { setTours } from '../../redux/slices/tour/tourSlice';
import CardCommentList from '../ui/CardCommentList';
import AddFormComment from '../ui/AddFormComment';
import PayForm from '../ui/PayForm';
import { thunkEditCountPay } from '../../redux/slices/tour/createAsyncThunk';

export default function MorePage(): JSX.Element {
  const [dataPage, setDataPage] = useState(0);
  const [dataPageInfo, setDataPageInfo] = useState(undefined);
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log(typeof id);
    axios
      .get<TourType[]>(`http://localhost:3000/api/region/tours/more/${id}`)
      .then(({ data }) => {
        dispatch(setTours(data));
        setDataPageInfo(data[0]);
        setDataPage(data[0].currentPlace);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, id]);

  // const onepage = useAppSelector((store) => store.tourSlice.tours).filter(
  //   (el) => el.id === Number(id),
  // );

  const handleClickButton = (): void => {
    setDataPage((prev) => prev - 1);
    void dispatch(thunkEditCountPay(Number(id)));
  };

  if (dataPageInfo) {
    return (
      <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
        <Carousel style={{ width: '800px', height: '350px' }}>
          <Carousel.Item style={{ width: '600px', height: '350px' }}>
            <img src={dataPageInfo?.PhotoTour.img1} alt="12" />
          </Carousel.Item>
          <Carousel.Item style={{ width: '600px', height: '350px' }}>
            <img src={dataPageInfo?.PhotoTour.img2} alt="12" />
          </Carousel.Item>
          <Carousel.Item style={{ width: '600px', height: '350px' }}>
            <img src={dataPageInfo?.PhotoTour.img3} alt="12" />
          </Carousel.Item>
          <Carousel.Item style={{ width: '600px', height: '350px' }}>
            <img src={dataPageInfo?.PhotoTour.img4} alt="12" />
          </Carousel.Item>
        </Carousel>

        <Stack>
          <CardBody>
            <Heading size="md">{dataPageInfo?.name}</Heading>

            <Text py="2">{dataPageInfo?.body}</Text>
            <Text py="2">{dataPageInfo?.description}</Text>
            <Text py="2">Осталось мест: {dataPage}</Text>
            <Button
              onClick={() => setShow(true)}
              colorScheme="green"
              bg="green.400"
              rounded="full"
              px={6}
              _hover={{
                bg: 'green.500',
              }}
              my={4}
            >
              Купить тур
            </Button>
            <PayForm
              show={show}
              handlerClose={() => setShow(false)}
              handleClickButton={handleClickButton}
            />
          </CardBody>

          <Grid templateColumns="1fr" gap={4} style={{marginBottom: '330px'}}>
            <Grid>
              <CardCommentList />
            </Grid>
            <Grid>
              {/* <h2>Отзывы!</h2> */}
              <AddFormComment />
            </Grid>
          </Grid>
        </Stack>
      </Card>
    );
  }
  return <div>Load....</div>;
}
