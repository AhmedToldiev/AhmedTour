import axios from 'axios';
import type { TourType } from '../types/tour/tour';

export const apiHistoryInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

class HistoryService {
  static async getAllTours(): Promise<TourType[]> {
    const { data } = await apiHistoryInstance<TourType[]>('/history');
    return data;
  }
}

export default HistoryService;
