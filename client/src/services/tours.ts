import axios from 'axios';
import type { AddTourFormData, TourType } from '../types/tour/tour';

export const apiTourInstance = axios.create({
  baseURL: 'http://localhost:3000/api/region/tours',
});

class TourService {
  static async getTour(): Promise<TourType[]> {
    const response = await apiTourInstance.get<TourType[]>('/');
    if (response.status === 200) return response.data;
    return [];
  }

  static async editTour(
    formData: AddTourFormData,
    id: TourType['id'],
  ): Promise<TourType> {
    const response = await apiTourInstance.patch<TourType>(`/api/region/tours/${id}`, formData);
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Error editing on server'));
  }
}

export default TourService;
