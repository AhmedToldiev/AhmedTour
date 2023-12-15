import axios from 'axios';
import type { TourType } from '../types/tour/tour';

export const apiTourInstance = axios.create({
  baseURL: 'http://localhost:3000/api/region/tours',
});

class TourService {
  static async getTour(): Promise<TourType[]> {
    const response = await apiTourInstance.get<TourType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }
}

export default TourService;
