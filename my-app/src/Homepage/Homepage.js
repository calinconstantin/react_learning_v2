import { useState } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Menu } from '../Menu/Menu';
import { Content } from '../Content/Content';

export default function Homepage() {
  return (
    <>
      <Header/>
      <Menu/>
      <Content/>
      <Footer/>
    </>
  );
}