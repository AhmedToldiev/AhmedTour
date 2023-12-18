import type { BasketType, TourWithUser } from '../basket/basket';

export type TourType = {
  id: number;
  name: string;
  body: string;
  description: string;
  price: string;
  regionId: number;
  photoTourId: number;
  createdAt: Date;
  updatedAt: Date;
};
export type TourState = {
  region: TourType[];
};

// какой тип должен стоять тут
export type TourSlicesState = {
  favoriteTours: TourWithUser[];
  tours: TourType[];
  basket: BasketType[]
};
