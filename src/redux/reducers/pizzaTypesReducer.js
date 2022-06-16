import { createSlice } from "@reduxjs/toolkit";
import pepperoni from '../../assets/peproni.png'
import mashroom from '../../assets/mashroom.png'
import margrita from '../../assets/margrita.png'
import seafood from '../../assets/seafood.png'
import tuna from '../../assets/tuna.png'
import vegetarian from '../../assets/vegetarian.png'
import chicken from '../../assets/chicken.png'
import beef from '../../assets/beef.png'
import seasons from '../../assets/4 seasons.png'

export const pizzaTypesSlice = createSlice({
    name:'pizzaTypesSlice',
    initialState:{
        pizza:[
            {
              id:1,
              name:'pepperoni',
              likes:270,
              desc:'one of our all time specialties. a meaty feast of pepperoni, black olives, mozzarella cheese and tomato sause',
              img:pepperoni
            },
            {
              id:2,
              name:'mashroom',
              likes:255,
              desc:'The BEST pizza for all  mushroom lovers! Loaded with 2 types of cheese and garlic herb sautéed mushrooms',
              img:mashroom
            },
            {
              id:3,
              name:'margrita',
              likes:240,
              desc:' Bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt',
              img:margrita
            },
            {
              id:4,
              name:'seafood',
              likes:205,
              desc:'the ultimate seafood pizza! generously topped with a sea of prawns , calamari ,parsley and a touch of galric',
              img:seafood
            },
            {
              id:5,
              name:'tuna',
              likes:198,
              desc:'indulge in a flavourful combination of tuna, black olives, green peppers and topped with melting mozzerlla cheese.',
              img:tuna
            },
            {
              id:6,
              name:'vegetarian',
              likes:152,
              desc:' This Ultimate Veggie Pizza has the tastiest combination of vegetables for the freshest flavor and my favorite pizza EVER',
              img:vegetarian
            },
            {
              id:7,
              name:'chicken',
              likes:144,
              desc:'grilled chicken, fresh tomatoes, mushrooms and green jalapeno peppers with a drizzle of thick peri peri sauce',
              img:chicken
            },
            {
              id:8,
              name:'beef',
              likes:123,
              desc:'our famous combination of beef pepperoni, juicy Beef, mushrooms, green peppers, onions and melting mozzarella',
              img:beef
            },
            {
              id:9,
              name:'Four seasons',
              likes:118,
              desc:'Four Seasons Pizza is divided into sections with different toppings representing the four seasons.',
              img:seasons
            }
        ],
        favPizza:[],
        cart:[],
        subtotal:[],
    },
    reducers:{
        addFav:(state,action)=>{  
          const newArray = state.favPizza.filter((pizza)=>pizza.id == action.payload.id)
            if(!newArray.length){
            state.favPizza.push(action.payload);
          }
        },
        removeFav:(state,action)=>{
            state.favPizza = state.favPizza.filter((pizza)=>pizza.id != action.payload);
        },
        addToCart:(state,action)=>{  
          const newArray = state.cart.filter((pizza)=>pizza.id == action.payload.id)
            if(!newArray.length){
            state.cart.push(action.payload);
          }
        },
        removeFromCart:(state,action)=>{
          state.cart = state.cart.filter((pizza)=>pizza.id != action.payload);
      },
        addTotal:(state,action)=>{  
          const newArray = state.subtotal.filter((pizza)=>pizza.id == action.payload.id)
            if(!newArray.length){
            state.subtotal.push(action.payload);
          }
        },
        editTotal:(state,action)=>{  
          const newCosts = state.subtotal.map(order =>
            order.id === action.payload.id
              ? { ...order, cost: action.payload.cost ,count: action.payload.count}
              : order
          );
         state.subtotal = newCosts
        },
        removeTotal:(state,action)=>{
          state.subtotal = state.subtotal.filter((pizza)=>pizza.id != action.payload);
      },
    }
})
export const {addFav , removeFav , addToCart ,removeFromCart, addTotal, editTotal, removeTotal} = pizzaTypesSlice.actions;
export default pizzaTypesSlice.reducer ;