import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './components/pages/MainPage';

import { useAppDispatch, useAppSelector } from './redux/hooks';
import { thunkRegionLoad } from './redux/slices/region/createAsyncThunk';

import RegistrationModal from './components/ui/RegistrationModal';
import LoginModal from './components/ui/LoginModal';
import NavBar from './components/ui/NavBar';

function App(): JSX.Element {
  const registrModal = useAppSelector((state) => state.authSlice.addRegistrationModalIsOpen);
  const logModal = useAppSelector((state) => state.authSlice.addLoginModalIsOpen);

  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkRegionLoad());
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} /> */}
        {/* <Route path="/" element={<RegistrationModal />} /> */}
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/region" element={<Тут регион будет />} />

<Route path="/tours" element={<Тут админ панель />} /> */}
      </Routes>

      {registrModal && <RegistrationModal />}
      {logModal && <LoginModal />}
    </>
  );
}

export default App;
