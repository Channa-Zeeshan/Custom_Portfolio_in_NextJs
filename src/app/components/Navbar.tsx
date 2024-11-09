import React from 'react'
import Styles from './navbar.module.css'
import Link from 'next/link'



const Navbar = () => {
  return (
    <div className={Styles.container}>
        <div>
        <h1> Zee Tech.</h1>
        </div>
        <div className={Styles.navtag}>
            <ul>
                <li> <Link href='../Home'>  Home   </Link></li>
                <li>|</li>
                <li> <Link href='../About'>  About   </Link></li>
                <li>|</li>
                <li><Link href='../contact'>  Contact   </Link></li>
            </ul>
        </div>
        


    </div>
  )
}

export default Navbar