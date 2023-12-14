import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import ExampleCarouselImage from 'components/ExampleCarouselImage'

import type { RegionType } from '../../types/region/region';

type RegionTypeProps = {
  region: RegionType;
};

export default function CarouselCard({ region }: RegionTypeProps): JSX.Element {
  return (
    // activeIndex={index} onSelect={handleSelect}

    <Carousel.Item style={{display: 'block'}}>
      <Card.Img variant="top" src={`${region.img}`} />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}
