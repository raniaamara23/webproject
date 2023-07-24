import Image from 'next/image'
import styles from'./page.module.css'
import abou from "public/abou.jpg"

const About= () => {
  return (
    <div  div className={styles.container} >
    <div className={styles.item}>
      <h1  className={styles.title}> ABOUT US</h1>
      <h2  className={styles.h2} >We are a Web Design Agency</h2>
      <button  className={styles.butt}> LEARN MORE</button>
    </div>
    <div  className={styles.item}>
    <Image  src={abou} className={styles.img} alt="ll"/>
    </div>
   </div>
  )
}

export default About
