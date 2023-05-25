import { Pagination } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { JobCard } from '../components/JobCard';
import styles from './App.module.css'
import qweIcon from './12.png'
import { useNavigate } from 'react-router-dom';


export  function SavedPage() {

  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()
  const faveRepos  = useSelector( state => state.favouriteRepos)

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageCount = Math.ceil(faveRepos.favourites.length / 4) + (faveRepos.favourites.length % 4 > 0 ? 1 : 0);
  const startIndex = (currentPage - 1) * 4;
  const endIndex = startIndex + 4;
  const finalRes = faveRepos.favourites.slice(startIndex, endIndex);



  if(faveRepos.favourites.length === 0) return (
    <div className={styles.containers}>
      <div className={styles.groups}>
        <img src ={qweIcon}/>
        <span className={styles.txts}>Упс, здесь еще ничего нет!</span>
        <div className={styles.btnForm} onClick={() => navigate('/')}>
          <span className={styles.smtxt} >Поиск вакансий</span>
        </div>
      </div>
    </div>
  )


  return (
    <div className={styles.containeras}>
     
        {finalRes.map((res )=> (
                  <JobCard
                      data-elem="vacancy-_vacancy_id_"
                      res ={res}
                  />
        ))}
   
    <Pagination
          className={styles.pag}
          total={pageCount-1}
          itemsPerPage={4}
          page={currentPage}
          onChange={handlePageChange}
          maxPages={pageCount}
        />
    </div>
  );
};

