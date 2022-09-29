import React, { ReactElement } from 'react';
import { FaFacebookF, FaInstagram, FaSpotify, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './SocialMedia.module.scss';

const SocialMedia = (): ReactElement => {
  return (
    <article className={styles.mediaContainer}>
      <div className={styles.title}>
        <span>Siga e compartilhe essa paixão!</span>
      </div>
      <ul className={styles.mediaList}>
        <li><a href="#"><FaFacebookF /></a></li>
        <li><a href="#"><FaInstagram /></a></li>
        <li><a href="#"><FaSpotify /></a></li>
        <li><a href="#"><FaTwitter /></a></li>
        <li><a href="#"><FaYoutube /></a></li>
      </ul>
    </article>
  );
};

export default SocialMedia;