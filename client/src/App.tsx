import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
<<<<<<< HEAD
import { useAppDispatch } from './redux/hooks';
import { thunkRegionLoad } from './redux/slices/region/createAsyncThunk';
=======
import RegistrationModal from './components/ui/RegistrationModal';
import NavBar from './components/ui/NavBar';
>>>>>>> dev

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkRegionLoad());
  }, []);
  return (
<<<<<<< HEAD
    <Routes>
      {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} /> */}

      <Route path="/" element={<MainPage />} />
      {/* <Route path="/region" element={<Тут регион будет />} />
=======
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} /> */}
        <Route path="/" element={<RegistrationModal />} />
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/region" element={<Тут регион будет />} />
>>>>>>> dev
          <Route path="/tours" element={<Тут админ панель />} /> */}

      </Routes>
    </>

  );
}

export default App;
