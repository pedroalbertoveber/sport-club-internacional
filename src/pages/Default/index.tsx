import React, { ReactElement } from 'react';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import { UserContextProvider } from 'context/UserContext';

const Default = (): ReactElement => {
  return (
    <>
      <UserContextProvider>
      <Header />
      <Outlet />
      <Footer />
      </UserContextProvider>
    </>
  );
};

export default Default;