import { useEffect } from 'react';
import type { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkRefreshToken } from '../../redux/slices/auth/checkAuthThunk';
import { apiRegionInstance } from '../../services/regions';
import { apiTourInstance } from '../../services/tours';
import { apiBasketInstance } from '../../services/baskets';

// useAxiosInterceptors(axiosInstance)
export default function useAxiosInterceptors(): void {
  const accessToken = useAppSelector((store) => store.authSlice.accessToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestInterceptorRegion = apiRegionInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptorRegion = apiRegionInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiRegionInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    const requestInterceptorTour = apiTourInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptorTour = apiTourInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiTourInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );
    const requestBasketLoadInterceptor = apiBasketInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseBasketLoadInterceprot = apiBasketInstance.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(thunkRefreshToken()).unwrap();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiTourInstance(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiRegionInstance.interceptors.request.eject(requestInterceptorRegion);
      apiRegionInstance.interceptors.response.eject(responseInterceptorRegion);
      apiTourInstance.interceptors.request.eject(requestInterceptorTour);
      apiTourInstance.interceptors.response.eject(responseInterceptorTour);
      apiBasketInstance.interceptors.request.eject(requestBasketLoadInterceptor);
      apiBasketInstance.interceptors.response.eject(responseBasketLoadInterceprot);

    };
  }, [accessToken, dispatch]);
}
