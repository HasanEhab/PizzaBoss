import React, { useState } from 'react'
import "../css/addToCart.css"
import imag from "../assets/beef.png"
import bbq from "../assets/bbq.png"
import green from "../assets/green.png"
import cheese from "../assets/cheese.png"
import { useDispatch, useSelector } from 'react-redux'
import { addFav, addToCart, addTotal, removeFav } from '../redux/reducers/pizzaTypesReducer'

function AddToCart(props) {
    const [solid,setSolid] = useState(false)
    const [likes,setLikes] = useState(props.data.likes)
    const [souce,setSouce] = useState('none')
    const [size,setSize] = useState('small')
    const [cost,setCost] = useState(10)

    const favpizza = useSelector((state) => state.pizza.favPizza);
    const cart = useSelector((state) => state.pizza.cart);
    const TOTAL = useSelector((state) => state.pizza.subtotal);
    const dispatch = useDispatch();

    const likeFunction = ()=>{

      setSolid(!solid);
      setLikes(solid?likes-1:likes+1)
      !solid ? dispatch(addFav(props.data)):dispatch(removeFav(props.data.id))        

    }

    const addCartItem = ()=>{
        let sizeVal = 10 ;
        let souceVal = 0;

        switch(souce){
            case 'none': souceVal = 0 ; break;
            case 'Bbq': souceVal = 5 ; break;
            case 'Cheese': souceVal = 7 ; break;
            case 'Green': souceVal = 3 ; break;
        }
        switch(size){
            case 'small': sizeVal = cost ; break;
            case 'meduim':sizeVal = cost + 5 ; break;
            case 'large': sizeVal = cost + 10 ; break;
            case 'family': sizeVal = cost + 15 ; break;
        }
        let total = sizeVal + souceVal ;

        let item = {
            id:props.data.id,
            name:props.data.name,
            img:props.data.img,
            size:size,
            souce:souce,
            count:1,
            cost:total
        }
        let subtotal = {
            id:props.data.id,
            cost:total,
            count:1
        }
        dispatch(addToCart(item))
        dispatch(addTotal(subtotal))
        props.overLay()
        }

    const activeSize = (size)=>{
        const sizes = ['small','meduim','large','family']

        for (let x = 0;x < sizes.length;x++) {
            document.getElementById(sizes[x]).classList.remove("active-size")
        }
        document.getElementById(size).classList.add("active-size")
        
    }
    
    const activeSouce = (souce)=>{
        const souces = ['Bbq','Cheese','Green']

        for (let x = 0;x < souces.length;x++) {
            document.getElementById(souces[x]).classList.remove("active-souce")
        }
        document.getElementById(souce).classList.add("active-souce")        
    }

  return (
    <div className='addToCart'>
        <div className='container-fluid mt-2 mt-sm-0'>
            <div className='addToCart__card mt-1 mt-sm-0 col-sm-10 offset-sm-1 col-md-8 offset-md-2 d-flex flex-column justify-content-center '>

            <div className='addToCart__rate'>
                <p className='addToCart__rate__num fs-3 lh-1 m-0 mx-2'>{likes}</p>
                <i onClick={likeFunction} className={`${solid ?'fa-solid':'fa-regular'} fa-heart addToCart__rate__heart fs-1 mx-2`}></i>
            </div>

                <div className='my-1 offset-0 col-12 offset-sm-1 col-sm-11 col-lg-8 offset-lg-2 d-flex flex-sm-row flex-column align-items-center text-start mt-5'>
                    <div className='addToCart__img'><img className='w-100' src={props.data.img} alt=''/></div>
                    <div className='addToCart__data w-75 px-1 px-sm-5'>
                        <h2 className='addToCart__title text-capitalize text-danger'>{props.data.name}</h2>
                        <p className='addToCart__desc text-capitalize'>{props.data.desc}</p>
                    </div>
                </div>

                <div className=' offset-0 col-12 offset-sm-1 col-sm-11 col-lg-8 offset-lg-2 d-flex flex-sm-row flex-column justify-content-between align-items-center text-start '>
                    <div className=' fs-4 fw-bold text-center w-25 my-sm-0 my-1'>Size</div>
                    <div className='addToCart__data  d-flex align-items-end justify-content-center w-75'>
                        <div className='size__small m-sm-3  mx-3 text-capitalize d-flex flex-column align-items-center'><div onClick={()=>{setSize('small');activeSize('small')}} id='small' className='size__small__img mb-2'>9''</div><p>small</p></div>
                        <div className='size__meduim m-sm-3 mx-3 text-capitalize d-flex flex-column align-items-center'><div onClick={()=>{setSize('meduim');activeSize('meduim')}} id='meduim' className='size__meduim__img mb-2'>11''</div><p>meduim</p></div>
                        <div className='size__large m-sm-3  mx-3 text-capitalize d-flex flex-column align-items-center'><div onClick={()=>{setSize('large');activeSize('large')}} id='large' className='size__large__img mb-2'>14''</div><p>large</p></div>
                        <div className='size__family m-sm-3 mx-3  text-capitalize d-flex flex-column align-items-center'><div onClick={()=>{setSize('family');activeSize('family')}} id='family' className='size__family__img mb-2'>16''</div><p>family</p></div>
                    </div>
                </div>

                <div className='offset-0 col-12 offset-sm-1 col-sm-11 col-lg-8 offset-lg-2 d-flex flex-sm-row flex-column justify-content-between align-items-center text-start mb-3 '>
                    <div className=' fs-4 fw-bold text-center w-25 my-sm-0 my-1 '>Sauce</div>
                    <div className='addToCart__data  d-flex align-items-end justify-content-center w-75 '>
                        <div className=' px-4 text-capitalize d-flex flex-column align-items-center' id='Bbq'><div onClick={()=>{setSouce('Bbq');activeSouce('Bbq')}}  className='size__large__img  bg-transparent mb-2'><img className='w-100' src={bbq}/></div><p>Bbq</p></div>
                        <div className=' px-4 text-capitalize d-flex flex-column align-items-center' id='Cheese'><div onClick={()=>{setSouce('Cheese');activeSouce('Cheese')}}  className='size__large__img  bg-transparent mb-2'><img className='w-100' src={cheese}/></div><p>Cheese</p></div>
                        <div className=' px-4 text-capitalize d-flex flex-column align-items-center' id='Green'><div onClick={()=>{setSouce('Green');activeSouce('Green')}}  className='size__large__img  bg-transparent mb-2'><img className='w-100' src={green}/></div><p>Green</p></div>
                    </div>


                </div>
                <div className='addToCart__close__mobile' onClick={props.overLay}>x</div>


                <button onClick={addCartItem} className='addToCart__button addToCart__img mx-auto py-2 fw-bold mb-sm-5 mb-3 mt-sm-3 mt-1'>Add To Cart</button>

                
            </div>  
            <div className='addToCart__close' onClick={props.overLay}>x</div>
        </div>

    </div>
  )
}

export default AddToCart