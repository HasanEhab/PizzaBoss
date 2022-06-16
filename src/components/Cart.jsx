import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Title from './Title';
import "../css/Cart.css"
import CartItem from './CartItem';

function Cart() {
    const favPizza = useSelector((state) => state.pizza.favPizza);
    const cart = useSelector((state) => state.pizza.cart);
    const subtotal = useSelector((state) => state.pizza.subtotal);
    let [totalCost,setTotalCost] = useState();

    useEffect(()=>{
        setTotalCost(0);
        let cost =0;
        if(subtotal.length){
            subtotal.map(ele=>{
                cost += ele.cost
            })
        }
        setTotalCost(cost)
        },[subtotal]
    )

    return (
      <div className='cart'>
        <Title title={'YOUR CART'}/>
        <div id='menu' className="container d-flex  flex-column flex-wrap p-4 justify-content-center">
        {cart.length?
           cart.map((pizza) => (
              <CartItem
                data={pizza}
                key={pizza.id}
                id={pizza.id}
                name={pizza.name}
                likes={pizza.likes}
                desc={pizza.desc}
                img={pizza.img}
              />
            )):<p className='fs-2'>Your Cart Is Empty</p>}
        {subtotal.length?
            <div className=' mt-3 my-sm-4 d-flex justify-content-end'>
                <p className='mt-2 mt-md-3 fs-4 subtotal_text'>Subtotal: </p>
                <p className='fs-1 fw-bold subtotal_num'>{'$' + totalCost}</p>
            </div>
            :''}
          {console.log(cart)}
        </div>
      </div>
    )
}

export default Cart