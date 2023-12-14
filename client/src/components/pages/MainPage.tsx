import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
import CarouselCard from '../ui/CarouselCard';

export default function MainPage(): JSX.Element {
  const regions = useAppSelector((store) => store.regionSlice.regions);
  console.log(regions);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container style={{ margin: '-100px' }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>{regions?.map((region) => <CarouselCard region={region} />)}</Carousel>
    </Container>
  );
}
