import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer-container'>
       <p>2022 Vensus Merch All rights reserved</p>
       <p className='icons'>
        <Link href='https://www.instagram.com/vensus.merch/'>
         <AiFillInstagram />
        </Link>
       
    
       </p>
    </div>
  )
}

export default Footer