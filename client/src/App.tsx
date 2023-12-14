import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import { useAppDispatch } from './redux/hooks';
import { thunkRegionLoad } from './redux/slices/region/createAsyncThunk';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkRegionLoad());
  }, []);
  return (
    <Routes>
      {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} /> */}

      <Route path="/" element={<MainPage />} />
      {/* <Route path="/region" element={<Тут регион будет />} />
          <Route path="/tours" element={<Тут админ панель />} /> */}
    </Routes>
  );
}

export default App;
