import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegistrationModal from './components/ui/RegistrationModal';
import NavBar from './components/ui/NavBar';

function App(): JSX.Element {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<RegistrationModal />} />
      </Routes>
    </>
  );
}

export default App;
