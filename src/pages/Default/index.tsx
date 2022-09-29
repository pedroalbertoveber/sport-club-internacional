import React, { ReactElement } from 'react';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';

const Default = (): ReactElement => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Default;