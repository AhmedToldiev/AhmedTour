import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Box, Flex } from '@chakra-ui/react';
import MainPage from './components/pages/MainPage';

import { useAppDispatch, useAppSelector } from './redux/hooks';
import { thunkRegionLoad } from './redux/slices/region/createAsyncThunk';

import RegistrationModal from './components/ui/RegistrationModal';
import LoginModal from './components/ui/LoginModal';
import NavBar from './components/ui/NavBar';

// import RegionCard from './components/ui/RegionCard';
import { thunkCheckAuth } from './redux/slices/auth/checkAuthThunk';
import ToursPage from './components/pages/TourPage';
import useAxiosInterceptors from './components/customHooks/useAxiosInterceptors';
import Loader from './components/hocs/Loader';
import BasketPage from './components/pages/BasketPage';
import AddTourModal from './components/ui/AddTourModal';
import EditTourModal from './components/ui/EditTourModal';
import MorePage from './components/pages/MorePage';
import Footer from './components/ui/Footer';
import Video from './components/Video';

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
  useAxiosInterceptors();

  return (
    <div style={{backgroundImage: 'url("https://otkritkis.com/wp-content/uploads/2022/07/gu7hb.gif")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
    <Container style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', height: '110vh' }}>
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
        <Footer />
        {registrModal && <RegistrationModal />}
        {logModal && <LoginModal />}
        {addTourModal && <AddTourModal />}
        {editTourModal && <EditTourModal />}
      </Loader>
    </Container>
    </div>
  );
}

export default App;
