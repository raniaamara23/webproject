import Image from 'next/image'
import styles from './page.module.css'
import Hero from "public/hero.png"
export default function Home() {
  return (
   <div  div className={styles.container} >
    <div className={styles.item}>
      <h1  className={styles.title}> Better design your digital products</h1>
      <p  className={styles.paragraph}> turning your idea into Reality.we bring together the teams from the global tech indestry</p>
      <button  className={styles.butt}> See Our Works</button>
    </div>
    <div  className={styles.item}>
    <Image  src={Hero} className={styles.img} alt="ll"/>
    </div>
   </div>
  )
}
