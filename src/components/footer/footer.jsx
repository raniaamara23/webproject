import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div  className={styles.cotainer}>
     <div  className={styles.text} >@2023 Deema .All rights reserved. </div>
     <div  className={styles.social}> 
     <Image   className={styles.icon} src="/2.png" alt="leemaimg" width={15} height={15}/>
     <Image   className={styles.icon} src="/3.png" alt="leemaimg" width={15} height={15}/>
     <Image  className={styles.icon} src="/4.png" alt="leemaimg" width={15} height={15}/>
     <Image  className={styles.icon} src="/5.png" alt="leemaimg" width={15} height={15}/>
       </div>
     
    </div>
  )
}

export default Footer
