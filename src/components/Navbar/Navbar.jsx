import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import logoIcon from './Union.png'

const Navbar = () => {
  const [active,setActive] = useState(2)
  const navigate = useNavigate()
  
  const handleClick = (itemId) => {
    setActive(itemId);
    if (itemId === 1) {
      navigate('/favourites');
    } else {
      navigate('/');
    }
  };

  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src={logoIcon} className={styles.logosvg}></img >
            <span className={styles.logotxt}>Jobored</span>
        </div>
        <div className={styles.itemgroup}>
            <span  className={`${styles.item} ${active === 2 ? styles.active : ''}`}
             onClick={() => handleClick(2)}>Поиск вакансий</span>
            <span  className={`${styles.item} ${active === 1 ? styles.active : ''}`}
              onClick={() => handleClick(1)}>Избранное</span>
        </div>
        
    </div>
  )
}

export  {Navbar}
