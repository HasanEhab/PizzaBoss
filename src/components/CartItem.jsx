import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import pep from "../assets/beef.png"
import "../css/CartItem.css"
import { editTotal, removeFromCart, removeTotal } from '../redux/reducers/pizzaTypesReducer'

function CartItem(props) {
    const TOTAL = useSelector((state) => state.pizza.subtotal);
    
    const [count,setCount] = useState()
    const [cost,setCost] = useState(props.data.cost)
    const [total,setTotal] = useState()
    
    const dispatch = useDispatch()


    useEffect(()=>{  
        TOTAL.map(order=>{if(order.id == props.id){setCount(order.count);setTotal(order.cost)}})
        console.log(TOTAL)
    },[TOTAL])

    const subtract = () => {
    if(count > 1){
        const newCount = count-1;
        const newCost = newCount*cost;
        dispatch(editTotal({id:props.id,cost:newCost,count:newCount}))
        // TOTAL.map(order=>{if(order.id == props.id){setCount(order.count);setTotal(order.cost)}})
    }
    }

    const addittion = ()=> {
        const newCount = count+1;
        const newCost = newCount*cost;
        dispatch(editTotal({id:props.id,cost:newCost,count:newCount}))
        // TOTAL.map(order=>{if(order.id == props.id){setCount(order.count);setTotal(order.cost)}})
    }

  return (
    <div className='cart-item col-12 my-2 my-sm-4 d-flex container'>
        <div className='col-6 d-flex align-items-center'>
            <img className='cart_item_img' src={props.data.img}/>
            <div className='d-flex flex-column justify-content-center px-1 px-sm-2'>
            <span  className='text-start text-capitalize text-danger cart-text_title mb-1'>{props.name}</span>
            <span  className='text-start text-capitalize  cart-text mb-1'>Size : {props.data.size}</span>
            <span  className='text-start text-capitalize  cart-text mb-1'>Sause : {props.data.souce}</span>    
            </div>

        </div>
        <div className='col-6 d-flex align-items-center justify-content-around '>
            <div className='d-flex m-lg-5 m-sm-3 m-1'>
                <div className='mx-2  cart-text sub right_side_data' onClick={subtract}>-</div>
                <div className='num  cart-text right_side_data'>{count}</div>
                <div className='mx-2  cart-text add right_side_data' onClick={addittion}>+</div>
            </div>   
            <div className='d-flex m-lg-5 m-sm-3 m-1  cart-text right_side_data'>
                ${total}
            </div>   
            <div className='d-flex m-lg-5 m-sm-3 m-1  fw-bold cart-text item-remove right_side_data' onClick={()=>{dispatch(removeFromCart(props.id));dispatch(removeTotal(props.id));}}>
                x
            </div>   
        </div>      
    </div>
  )
}

export default CartItem