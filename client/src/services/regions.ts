import axios from 'axios';
import type { RegionType } from '../types/region/region';

export const apiRegionRouter = axios.create({
  baseURL: 'http://localhost:3000/',
});

class RegionService {
  static async getRegion(): Promise<RegionType[]> {
    const response = await apiRegionRouter.get<RegionType[]>('/');
    if (response.status === 200) return response.data;
    return []
  }
  
}

export default RegionService;
