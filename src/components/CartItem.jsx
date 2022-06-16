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
            <img className='w-50' src={props.data.img}/>
            <div className='d-flex flex-column justify-content-center px-2'>
            <span  className='text-start text-capitalize fs-3 text-danger cart-text_title mb-1'>{props.name}</span>
            <span  className='text-start text-capitalize fs-6 cart-text mb-1'>Size : {props.data.size}</span>
            <span  className='text-start text-capitalize fs-6 cart-text mb-1'>Sause : {props.data.souce}</span>    
            </div>

        </div>
        <div className='col-6 d-flex align-items-center justify-content-around '>
            <div className='d-flex m-lg-5 m-sm-3 m-1'>
                <div className='mx-2 fs-3 cart-text sub' onClick={subtract}>-</div>
                <div className='num fs-3 cart-text'>{count}</div>
                <div className='mx-2 fs-3 cart-text add' onClick={addittion}>+</div>
            </div>   
            <div className='d-flex m-lg-5 m-sm-3 m-1 fs-3 cart-text'>
                ${total}
            </div>   
            <div className='d-flex m-lg-5 m-sm-3 m-1 fs-2 fw-bold cart-text item-remove' onClick={()=>{dispatch(removeFromCart(props.id));dispatch(removeTotal(props.id));}}>
                x
            </div>   
        </div>      
    </div>
  )
}

export default CartItem