import React from 'react';
import { useState } from 'react';
import styles from './Homepage.scss';
import { Header } from '../Header/Header';
import { Content } from '../Content/Content.js';
import { Footer } from '../Footer/Footer.tsx';

export function Homepage() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}