import React from 'react'
import { Filters } from '../components/Filters';
import styles from './App.module.css'
import { PaginationS } from '../components/Pagination'


export  function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
            <Filters/>
            <div className={styles.main}>
               <PaginationS itemsPerPage={4}/>
          </div>
      </div>
    </div>
  )
}
