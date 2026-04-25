import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import Exploremenu from '../../components/Exploremenu/Exploremenu.jsx'
import FoodDisplay from '../../components/Header/Fooddisplay/FoodDisplay.jsx'


const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home