import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Recipie from './components/Recipie';

function App() {
  return (
    <>
      <Header />
      <main className='container content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/category/:name' element={<Category />} />
          <Route path='/meal/:id' element={<Recipie />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
