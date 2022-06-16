import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import ContactUs from './ContactUs'
import OurStory from './OurStory'
import PizzaList from './pizzaList'
import Title from './Title'

function Home() {

  return (
    <div>
        <Title title={'MENU'}/>
        <PizzaList/>
        <OurStory/>
        <ContactUs/>
    </div>
  )
}

export default Home