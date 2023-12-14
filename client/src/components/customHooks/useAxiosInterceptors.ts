import { useEffect } from 'react';
import type { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkRefreshToken } from '../../redux/slices/auth/checkAuthThunk';
import { apiRegionInstance } from '../../services/regions';

export default function useAxiosInterceptors(): void {
  const accessToken = useAppSelector((store) => store.authSlice.accessToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const requestInterceptor = apiRegionInstance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiRegionInstance.interceptors.response.use(
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

    return () => {
      apiRegionInstance.interceptors.request.eject(requestInterceptor);
      apiRegionInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken]);
}
