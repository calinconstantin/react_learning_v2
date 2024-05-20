import React from 'react';
import { useState } from 'react';
import styles from './Homepage.scss';
import { Header } from '../Header/Header.js';
import { Menu } from '../Menu/Menu.js';
import { Content } from '../Content/Content.js';
import { Footer } from '../Footer/Footer.js';
//import backgroundImage from '../Attachments/logos-png-8.png'

export function Homepage() {
  return (
    <>
      <Header />
      <Menu />
      <Content />
      <Footer />
    </>
  );
}