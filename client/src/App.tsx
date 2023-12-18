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
import useAxiosInterceptors from './components/customHooks/useAxiosInterceptors';
import Loader from './components/hocs/Loader';
import { apiRegionInstance } from './services/regions';
import { apiBasketInstance } from './services/baskets';
import { apiTourInstance } from './services/tours';
import BasketPage from './components/pages/BasketPage';
import AddTourModal from './components/ui/AddTourModal';
import EditTourModal from './components/ui/EditTourModal';
import MorePage from './components/pages/MorePage';

function App(): JSX.Element {
  const registrModal = useAppSelector((state) => state.authSlice.addRegistrationModalIsOpen);
  const logModal = useAppSelector((state) => state.authSlice.addLoginModalIsOpen);
  const addTourModal = useAppSelector((state) => state.tourSlice.addTourModalIsOpen);
  const editTourModal = useAppSelector((state) => state.tourSlice.editTourModalIsOpen);

  const status = useAppSelector((state) => state.authSlice.user.status);

  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkRegionLoad());
    void dispatch(thunkCheckAuth());
    // void dispatch(thunkTourLoad())
  }, []);
  useAxiosInterceptors(apiRegionInstance);
  useAxiosInterceptors(apiTourInstance);
  useAxiosInterceptors(apiBasketInstance);

  return (
    <Loader isLoading={status === 'pending'}>
      <NavBar />
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} /> */}
        {/* <Route path="/" element={<RegistrationModal />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/region/:id" element={<ToursPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/more/:id" element={<MorePage />} />
        {/* <Route path="/region" element={<RegionCard />} /> */}

        {/* <Route path="/region" element={<RegionCard />} /> */}
      </Routes>
      {registrModal && <RegistrationModal />}
      {logModal && <LoginModal />}
      {addTourModal && <AddTourModal />}
      {editTourModal && <EditTourModal />}
    </Loader>
  );
}

export default App;
