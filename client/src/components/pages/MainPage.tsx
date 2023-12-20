import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import CarouselCard from '../ui/CarouselCard';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAppSelector } from '../../redux/hooks';

export default function MainPage(): JSX.Element {
  const regions = useAppSelector((store) => store.regionSlice.regions);
  // console.log(regions);

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
      items: 2,
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

  const imgStyle = {
    width: '800px', // Задайте фиксированную ширину
    height: '570px',
    justifyContent:'space-around',
    borderRadius: '19px',
    backgroundColor: 'rgba(0.5)', // Используйте 0 для полной прозрачности
    filter: 'brightness(60%)',
    border: '3px solid #fff', // Белая рамка шириной 2 пикселя
    transition: 'transform 0.3s ease-in-out', // Плавное изменение размера при наведении
    cursor: 'pointer', // Курсор при наведении
  };

  const hoverStyle = {
    filter: 'brightness(100%)',
  };

  const regionStyles = {
    position: 'absolute',
    top: '500px',
    // right: '6px',
    color: 'white',
    width: '800px',
    height: '726px',
    display: 'flex',
    justifyContent: 'center',

    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
    fontSize: '45px',
    fontWeight: 'bold',
  };

  return (
    <Carousel infinite autoPlay autoPlaySpeed={3000} responsive={responsive}>
      {regions.map((region) => (
        <div key={region.id} style={{ marginTop: '1px' }}>
          <Link to={`/region/${region.id}`} style={{ textDecoration: 'none' }}>
            <img key={region.id} src={region.img} alt="Img" style={imgStyle} />
            <h1 style={regionStyles}>{`${region.name}`}</h1>
            {/* <h5 style={regionStyles}>{`${region.description}`}</h5> */}
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
