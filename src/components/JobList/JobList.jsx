import React, { useEffect, useState } from 'react'
import { JobCard } from '../JobCard'
import styles from './JobList.module.css'

const JobList = ({finalRes}) => {

        return (
            <div className={styles.jobList}>
            {finalRes.map((res )=><JobCard data-elem="vacancy-_vacancy_id_" res ={res}/>)}
            </div>
        )
}

export  {JobList}

