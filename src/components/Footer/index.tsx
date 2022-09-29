import React, { ReactElement } from 'react';
import Partners from './Partners';
import SocialMedia from './SocialMedia';
import Supporters from './Supporters';
import Nav from './Nav';
import Signature from './Signature';

const Footer = (): ReactElement => {
  return (
    <footer>
      <Partners />
      <Supporters />
      <SocialMedia />
      <Nav />
      <Signature />
    </footer>
  );
};

export default Footer;