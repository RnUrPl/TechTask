import React, { useState } from 'react'
import styles from './Filters.module.css'
import { Button, NumberInput, Select } from '@mantine/core';
import { useCatalogQuery } from '../../store/superJob/superjobApi';
import cancelIcon from './cancel.png'
import downIcon from './Down.png'
import down1icon from './down1.png'
import upIcon from './up.png'
import { useActions } from '../../hooks/actionHook';


const Filters = () => {
    const  {setFilterOptions} = useActions()
    const {data, isLoading }=  useCatalogQuery()
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const [salaryFrom, setSalaryFrom] = useState('');
    const [salaryTo, setSalaryTo] = useState("");

    const handleFilters = () => {
        const filterOptionss = {
            industry: selectedIndustry,
            salaryFrom: salaryFrom,
            salaryTo: salaryTo,
          };
        setFilterOptions(filterOptionss)
    }

    const handleCancel =() => {
        setSelectedIndustry(null);
        setSalaryFrom("");
        setSalaryTo("");
        const filterOptionss = {
            industry: '',
            salaryFrom: 0,
            salaryTo: 2000000,
          };
        setFilterOptions(filterOptionss)
    }


    
  
    if(isLoading){
        return <div></div>
    }

    if(data){
        const options = data.map((industry) => ({
            label: industry.title_rus,
            value: industry.key,
        }))
    
      return (
        <div className={styles.form}>
                <div className={styles.article}>
                    <div className={styles.articletxt}>Фильтры</div>
                    <div className={styles.cancel_group}>   
                        <span
                        onClick={handleCancel} 
                        className={styles.defaultbtn}>
                            Сбросить все
                        </span>
                        <img src ={cancelIcon}/>
                    </div>
                </div>
                <div className={styles.filter_group}>
                    <div className={styles.filter}>
                        <div className={styles.filter_txt}>Отрасль</div>
                        <Select
                            
                            value = {selectedIndustry}
                            allowDeselect    
                            radius = {'md'}
                            rightSection = {<img src={downIcon}/>}
                            styles={{ rightSection: { pointerEvents: 'none' } }}
                            size={'md'}
                            placeholder="Выберите отрасль"
                            data={options}
                            transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
                            withinPortal
                            onChange={(value) => setSelectedIndustry(value)}
                            data-elem="industry-select"
                        />
                    </div>
                    <div className={styles.filter}>
                        <div className={styles.filter_txt}>Оклад</div>
                        <NumberInput  
                            data-elem="salary-from-input" 
                            rightSection ={
                                <div className={styles.section_group}>
                                    <img src={upIcon} onClick ={() => setSalaryFrom(parseInt(salaryFrom + 1000))}/>
                                    <img src = {down1icon} onClick ={() => {
                                          if (salaryFrom > 0) {
                                            setSalaryFrom(parseInt(salaryFrom) - 1000);
                                          }
                                    }}/>
                                </div>
                            }
                            min = {0}
                            value={salaryFrom}
                            placeholder="От" 
                            size={'md'}
                            onChange={(value) => setSalaryFrom(value)}
                        />
                        <NumberInput 
                            data-elem="salary-to-input"
                            rightSection ={
                                <div className={styles.section_group}>
                                    <img src={upIcon} onClick ={() => setSalaryTo(parseInt(salaryTo + 1000))}/>
                                    <img src = {down1icon} onClick ={() => {
                                          if (salaryTo > 0) {
                                            setSalaryTo(parseInt(salaryTo) - 1000);
                                          }
                                    }}/>
                                </div>
                            }  
                            min = {0}
                            value={salaryTo}
                            placeholder="До" 
                            size={'md'}
                            onChange={(value) => setSalaryTo(value)}
                        />
                    </div>
                    <Button 
                        size={'md'} 
                        fullWidth 
                        onClick={handleFilters} 
                        data-elem= "search-button"
                    >
                        Применить
                    </Button>
                </div>
            </div>
    
      )
    }

    return null


    
}

export  {Filters}

