import type { UserType } from '../auth';
import type { TourType } from '../tour/tour';

export type HistoryType = {
  id: number;
  user: UserType;
  tour: TourType;
};


export type HistorySlicesState = {
  history: HistoryType[];
};
