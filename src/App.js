import './App.css';
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Cover from './components/cover';
import Title from './components/Title';
import { store } from './redux/store';
import { Provider, useSelector } from 'react-redux';
import Footer from './components/Footer';
import OurStory from './components/OurStory';
import ContactUs from './components/ContactUs';
import FavPizza from './components/FavPizza';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className='App' id='app'>
        <Navbar />
        <Cover/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorite' element={<FavPizza/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        <Footer/>
      </div>
    </Provider>
    </BrowserRouter>

  );
}

export default App;
