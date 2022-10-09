import React from 'react';
import logofooter from '../../Assets/logo.svg';
import '../../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src={logofooter}
        alt="logo groupomania"
        style={{ height: 150, width: 150 }}
        height="150"
        width="150"
      />
      <a className="footer__link" href='/'>
        Un problème? Contactez un admin{' '}
      </a>
    </footer>
  );
}