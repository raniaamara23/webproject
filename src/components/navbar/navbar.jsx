"use client"
import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image';

const Links = [
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:2,
        title:"About",
        url:"/about",
    },
    {
        id:3,
        title:"Portfolio",
        url:"/portfolio",
    },
    
    {
        id:5,
        title:"Contact",
        url:"/contact",
    },
    
];


const Navbar = () => {
  return (
    <div   className={styles.container}>
       <Image  className={styles.image}src="/lo.png" alt="leemaimg" width={200} height={200}/>
       
    <div className={styles.links}>
    {Links.map((link) => (
        <Link key={link.id} href={link.url}> {link.title}</Link>
    ))}

   
</div>

</div>
);
};
export default Navbar;
