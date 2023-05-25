import React, { useEffect, useState } from 'react';
import styles from './JobCard.module.css';
import cityIcon from './icon.png';
import starIcon from './M.png';
import blueStar from './Star.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/actionHook';

const JobCard = ({ res }) => {
  const {setFavourite, deleteFavourite } = useActions()
  const filter = useSelector(state => state.favouriteRepos)
  const isFavourite = filter.favourites.some(item => item.id === res.id);

  const addToFav = () => {
    setFavourite(res)

  }

  const deleteFromFav = () => {
   deleteFavourite(res)
  }

  return (
    <div className={styles.main}>
      <div className={styles.article_group}>
      <Link to={`/${res.id}`} className={styles.article}>{res.profession}</Link>
        <div className={styles.text_group}>
          <div className={styles.salary}>{`з/п от ${res.payment_from} ${res.currency}`}</div>
          <div className={styles.dot}>.</div>
          <div className={styles.graphic}>{res.type_of_work}</div>
        </div>
        <div className={styles.city_group}>
          <img src={cityIcon} alt="City Icon" />
          <div className={styles.city}>{res.town}</div>
        </div>
      </div>


     {!isFavourite && <img
       data-elem="vacancy-_vacancy_id_-shortlist-button"
        src={starIcon}
        onClick={addToFav}
        alt="Star Icon"
        style={{ cursor: 'pointer' }}
      />}
        {isFavourite && <img
        data-elem="vacancy-_vacancy_id_-shortlist-button"
        src={blueStar}
        onClick={deleteFromFav}
        alt="Star Icon"
        style={{ cursor: 'pointer' }}
      />}
    </div>
  );
};

export { JobCard };
