import {  Button, Input } from '@mantine/core'
import searchIcon from './S.png';
import React, { useState } from 'react'
import styles from './SearchBar.module.css'
import { useActions } from '../../hooks/actionHook';

const SearchBar = () => {
    const [keyword, setKeyword] = useState('');
    const {setFiltredKeyword} = useActions()

    const handleKeyword = () => {
      setFiltredKeyword(keyword)
    }
    
  return (
    <div>
          <Input
                data-elem="search-input"
                rightSection ={<Button data-elem= "search-button" className={styles.findBtn} radius={'lg'} size={'xs'} onClick={handleKeyword} >
                                  Поиск
                            </Button>}
                size={'lg'}
                radius={'md'}
                icon={<img src={searchIcon} alt="Search Icon" />}
                placeholder="Ввыедите название вакансии"
                onChange={(event) => setKeyword(event.target.value)}
                className = {styles.searchBar}
        >
        </Input>
    </div>
  )
}

export  {SearchBar}
