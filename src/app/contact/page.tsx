import React from 'react'
import { FaFacebook , FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from './contact.module.css'


const contact = () => {
  return (
    <div className={styles.container}> 
        <div className={styles.contact}>

            <h1> Contact Here</h1>

        </div>
        <div className={styles.icons}>
            <ul>
                <li> <FaFacebook /></li>
                <li> <FaInstagram /></li>
                <li><FaXTwitter /></li>
                <li> <FaYoutube /></li>
            </ul>
        
       
         
       

        </div>


    </div>
  )
}

export default contact