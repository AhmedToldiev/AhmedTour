export type TourType = {
  id: number;
  name:string,
  body: string;
  description: string;
  price: string;
  regionId: number;
  photoTourId: number;
  createdAt: Date;
  updatedAt: Date;
};
export type AddTourFormData = {
  name:string,
  body: string;
  // description: string;
  price: string;
};

export type TourState = {
  region: TourType[];
};

export type TourSlicesState ={
  tours: TourType[]
  currentTour: TourType | null;
  addTourModalIsOpen: boolean;
}
