import React from 'react'
import { useParams } from 'react-router-dom';
import { JobCard } from '../components/JobCard';
import { useVacancyQuery } from '../store/superJob/superjobApi'
import styles from './App.module.css'
import { RingLoader } from 'react-spinners';


export function OfferPage() {

    const {id} = useParams()
    const {data, isLoading} = useVacancyQuery(id)
    const ar =[data]

 


    if (isLoading) {
        return (
          <div className="loader-container">
            <RingLoader color={'#123abc'} size={150} />
          </div>
        );
      }

    if(data){

        const result = ar.map((vacancy) => ({
            id: vacancy.id,
            profession: vacancy.profession,
            firm_name: vacancy.firm_name,
            town: vacancy.town.title,
            type_of_work: vacancy.type_of_work.title,
            payment_to: vacancy.payment_to,
            payment_from: vacancy.payment_from,
            currency: vacancy.currency,
            mustHave: vacancy.vacancyRichText
          }));


        return (
            <div className={styles.containeras}>
                {result.map(res => (
                    <JobCard data-elem= "vacancy-_vacancy_id_" res ={res}/>
                ))}
                <div className={styles.form}>
                    {result.map(res => (
                        <div className={styles.txt} dangerouslySetInnerHTML={{__html: res.mustHave}}/>
                    ))}
                </div>
            </div>
          )
    }

    return null

  
}
