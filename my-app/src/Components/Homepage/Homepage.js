import React from 'react';
import { useState } from 'react';
import styles from './Homepage.scss';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content.js';
import { Footer } from '../Footer/Footer.js';
//import backgroundImage from '../Attachments/logos-png-8.png'

export function Homepage() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}