import React from 'react'
import Styles from  './home.module.css'
import Image from 'next/image'

const Home = () => {
  return (
    <div className={Styles.container}> 

    <div className={Styles.innercontainer}>


        <div className={Styles.imagediv}>  </div>
        <div className={Styles.textdiv}> 
            <h1 className={Styles.intro}> Hello I am <span className={Styles.name}>Zeeshan Ali </span></h1>
            <h1 className={Styles.i}> A Web Developer, Next Js Expert and Full Stack Developer</h1>
        </div>


    </div>
    
    
    
    
    </div>
  )
}

export default Home