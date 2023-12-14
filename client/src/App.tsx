import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './components/MainPage';
import RegistrationModal from './components/ui/RegistrationModal';
import NavBar from './components/ui/NavBar';
import { useAppSelector } from './redux/hooks';

function App(): JSX.Element {
  const open = useAppSelector((state) => state.user.addCommentModalIsOpen);
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
      {open && <RegistrationModal />}
    </>
  );
}

export default App;
