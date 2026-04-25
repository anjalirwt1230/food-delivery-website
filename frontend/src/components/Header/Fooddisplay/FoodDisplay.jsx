import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../../context/StoreContext';


const FoodDisplay = ({ category }) => {

   const { food_list } = useContext(StoreContext);

  return (
    <div className='Food-Display' id='Food-Display'>
        <h2>Top dishes near you</h2>

        {food_list.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
          </div>
        ))}

    </div>
  )
}

export default FoodDisplay