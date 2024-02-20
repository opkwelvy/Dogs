import React from 'react';
import Dogs from '../Assets/dogs-footer.svg?react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados</p>
    </div>
  );
};

export default Footer;
