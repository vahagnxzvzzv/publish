import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <div>
       <div className={styles.navbar}>
        <a href='/'>Home</a>
        <a href='/'>About us</a>
        <a href='/'>Contact us</a>
       </div> 
    </div>
  )
}

export default Header