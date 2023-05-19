import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import Navbar from './Navbar';

import './App.css'
import Freesloganmaker from './FreeSloganMaker';
import Features from './Features';
import FreeProducts from './FreeProducts';
import Footer from './Footer';

function App() {


  return (
    <>
      <main className='main__container'>
        <Navbar />
        <Freesloganmaker />
        <Features />
        <FreeProducts />
        <Footer />
      </main>
    </>
  )
}

export default App
