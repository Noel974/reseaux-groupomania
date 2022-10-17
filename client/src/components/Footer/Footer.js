import React from 'react';
import { GoMail } from 'react-icons/go';
import logofooter from '../../Assets/logo.svg';


const Footer = () => {
  return (
    <footer id="sticky-footer" className="flex-shrink-0 py-4 text-white-50">
     <div className="container text-center">
      <img
        className="footer__logo"
        src={logofooter}
        alt="logo groupomania"
        style={{ height: 150, width: 150 }}
        height="150"
        width="150"
      />
      <a className="footer__link" href="/">
        Un problème? Contactez un admin{' '}
        <GoMail className="footer__icon"  />
      </a>
      </div>
    </footer>
  );
};

export default Footer;