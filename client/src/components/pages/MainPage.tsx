import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Carousel } from 'react-bootstrap';
import { useAppSelector } from '../../redux/hooks';
// import CarouselCard from '../ui/CarouselCard';

export default function MainPage(): JSX.Element {
  const regions = useAppSelector((store) => store.regionSlice.regions);
  // console.log(regions);
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel infinite autoPlay autoPlaySpeed={1500} responsive={responsive}>
      {regions.map((region) => (
        <img src={region.img} alt="Img" />
      ))}
    </Carousel>
  );
}
