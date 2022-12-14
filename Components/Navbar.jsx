import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useStateContext();
  return (
    <div className='navbar-container'>
        <div className='logo'>
          <div className='logo-container'>
             <Link href='/'> 
            <img src='https://i.postimg.cc/qvvs542c/Watermark.png' alt="Vensus Logo"/>
            </Link>
          </div>
           
        </div>
        <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping/>
            <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
    {showCart && <Cart />}

    </div>
  )
}

export default Navbar