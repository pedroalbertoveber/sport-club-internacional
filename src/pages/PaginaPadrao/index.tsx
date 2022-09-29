import React, { ReactElement } from 'react';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';

const PaginaPadrao = (): ReactElement => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PaginaPadrao;