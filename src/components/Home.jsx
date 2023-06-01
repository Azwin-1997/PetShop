import React from 'react'
import Navba from './Navbar'
import SearchBox from './Search'
// import './User.css'

import './Home.css'
import ProductList from './ProductList'


function Home() {
  
  return (<>
    <div>
    <Navba />
      <SearchBox />
    <img className='dog' src="https://i.pinimg.com/originals/09/8c/fa/098cfa107b3fa97496db3f892419d5fc.png" alt="" />
      
      <ProductList />
    </div>

   
    </>
  )
}

export default Home


