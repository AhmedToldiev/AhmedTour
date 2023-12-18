import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './components/pages/MainPage';

import { useAppDispatch, useAppSelector } from './redux/hooks';
import { thunkRegionLoad } from './redux/slices/region/createAsyncThunk';

import RegistrationModal from './components/ui/RegistrationModal';
import LoginModal from './components/ui/LoginModal';
import NavBar from './components/ui/NavBar';

// import RegionCard from './components/ui/RegionCard';
import { thunkCheckAuth } from './redux/slices/auth/checkAuthThunk';
import ToursPage from './components/pages/TourPage';
import { thunkTourLoad } from './redux/slices/tour/createAsyncThunk';


function App(): JSX.Element {
  const registrModal = useAppSelector((state) => state.authSlice.addRegistrationModalIsOpen);
  const logModal = useAppSelector((state) => state.authSlice.addLoginModalIsOpen);
  const addTourModal = useAppSelector((state) => state.tourSlice.addTourModalIsOpen);
  const editTourModal = useAppSelector((state) => state.tourSlice.editTourModalIsOpen);

  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkRegionLoad());
    void dispatch(thunkCheckAuth());
    void dispatch(thunkTourLoad());
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} /> */}
        {/* <Route path="/" element={<RegistrationModal />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/region/:id" element={<ToursPage />} />
        <Route path="/more/:id" element={<MorePage />} />
        {/* <Route path="/region" element={<RegionCard />} /> */}

        {/* <Route path="/tours" element={<Тут админ панель />} />  */}
      </Routes>

      {registrModal && <RegistrationModal />}
      {logModal && <LoginModal />}
      {addTourModal && <AddTourModal />}
      {editTourModal && <EditTourModal />}
    </>
  );
}

export default App;
