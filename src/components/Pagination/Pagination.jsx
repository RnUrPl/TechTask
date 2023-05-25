import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuthenticateMutation, useSearchQuery } from '../../store/superJob/superjobApi';
import { JobList } from '../JobList';
import { Pagination } from '@mantine/core';
import { SearchBar } from '../SearchBar';
import styles from './Pag.module.css'
import { RingLoader } from 'react-spinners';
import { useActions } from '../../hooks/actionHook';

const PaginationS = ({ itemsPerPage }) => {
  const filters = useSelector((state) => state.filterOptions);
  const {setAccesToken} = useActions()
  const [authenticate] = useAuthenticateMutation();
  const [currentPage, setCurrentPage] = useState(1);

  const { data: vacanciesData, isLoading } = useSearchQuery({
    keyword: filters.keyword,
    accessToken: filters.accessToken,
    catalogues: filters.industry,
    payment_from: filters.salaryFrom,
    payment_to: filters.salaryTo
  });

  const handleLogin = async () => {
    try {
      const credentials = {
        login: 'sergei.stralenia@gmail.com',
        password: 'paralect123',
        client_id: '2356',
        client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        hr: 0
      };
      const result = await authenticate(credentials).unwrap();
      setAccesToken(result.access_token);
      console.log('Авторизация выполнена успешно');
    } catch (error) {
      console.log('Ошибка авторизации!');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  useEffect(() => {
    handleLogin();
  }, []);


  if (isLoading) {
    return (
      <div className="loader-container">
        <RingLoader color={'#123abc'} size={150} />
      </div>
    );
  }

  if (vacanciesData) {
    const result = vacanciesData.objects.map((vacancy) => ({
      id: vacancy.id,
      profession: vacancy.profession,
      firm_name: vacancy.firm_name,
      town: vacancy.town.title,
      type_of_work: vacancy.type_of_work.title,
      payment_to: vacancy.payment_to,
      payment_from: vacancy.payment_from,
      currency: vacancy.currency
    }));

    const pageCount = Math.ceil(result.length / itemsPerPage) + (result.length % itemsPerPage > 0 ? 1 : 0);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const finalRes = result.slice(startIndex, endIndex);

    return (
      <div>
        <SearchBar/>
        <JobList finalRes={finalRes} />

        <Pagination
          className={styles.pag}
          total={pageCount}
          itemsPerPage={itemsPerPage}
          page={currentPage}
          onChange={handlePageChange}
          maxPages={pageCount}
        />
      </div>
    );
  }

  return null;
};

export { PaginationS };
