import React from 'react';
import { Badge, Button, ListGroup } from 'react-bootstrap';
import type { RegionType } from '../../types/region/region';

type RegionCardProps = {
  region: RegionType;
};

export default function RegionCard({ region }: RegionCardProps): JSX.Element {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{region.name}</div>
        {region.description}
      </div>
      <Badge as={Button} onClick={() => console.log('Кинуть в ЧС!')} bg="danger" pill>
        ban
      </Badge>
      <Badge as={Button} bg="primary" pill>
        more
      </Badge>
    </ListGroup.Item>
  );
}
