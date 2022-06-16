import React from 'react'
import { useSelector } from 'react-redux';
import PizzaCard from './PizzaCard';
import Title from './Title'
import "../css/FavPizza.css"

function FavPizza() {
  const favPizza = useSelector((state) => state.pizza.favPizza);

  return (
    <div className='FavPizza'>
      <Title title={'YOUR FAVOURITE PIZZA'}/>
      <div id='menu' className="container d-flex flex-wrap p-4 justify-content-center">
      {favPizza.length
        ? favPizza.map((pizza) => (
            <PizzaCard
              page={'fav'}
              data={pizza}
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              likes={pizza.likes}
              desc={pizza.desc}
              img={pizza.img}
            />
          ))
        : <p className='fs-2'>There Is No Favourite</p>}
    </div>

    </div>
  )
}

export default FavPizza