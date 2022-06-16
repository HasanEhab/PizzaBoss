import React, { useEffect, useState } from 'react'
import "../css/PizzaCard.css"
import { useDispatch, useSelector } from 'react-redux'
import { addFav, removeFav } from '../redux/reducers/pizzaTypesReducer'
import AddToCart from './addToCart'

function PizzaCard(props) {
    const [solid,setSolid] = useState(props.page=='fav'?true:false)
    const [likes,setLikes] = useState(props.page=='fav'?props.likes+1:props.likes)
    const [overLay,setOverLay] = useState(false)
    const favpizza = useSelector((state) => state.pizza.favPizza);
    const dispatch = useDispatch();


    const likeFunction = ()=>{
      if(props.page=='fav'){
      dispatch(removeFav(props.id))        
      }else{
      setSolid(!solid);
      setLikes(solid?likes-1:likes+1)
      !solid ? dispatch(addFav(props.data)):dispatch(removeFav(props.id))        
      }

    }

  return (
    <div className='pizzaCard col-md-6 col-lg-4 px-5 mb-5'>
        <p className='pizzaCard__title'>{props.name}</p>
        <div className='pizzaCard__avatar m-2'>
            <img src={props.img} alt='' className='p-4 w-100 pt-5'/>
            <div className='pizzaCard__avatar__rate'>
                <p className='pizzaCard__avatar__rate__num lh-1 m-0'>{likes}</p>
                <i onClick={likeFunction} className={`${solid ?'fa-solid':'fa-regular'} fa-heart pizzaCard__avatar__rate__heart fs-3 mx-2`}></i>
            </div>
        </div>
        <p className='pizzaCard__desc fw-bold px-3'>{props.desc}</p>
        <button className='pizzaCard__add btn w-75' onClick={()=>{setOverLay(true)}}>Add to cart</button>
        {overLay ? <AddToCart data={props.data} overLay={()=>{setOverLay(false)}}/> :''}
    </div>
  )
}

export default PizzaCard