import {useEffect, useState} from 'react'
import {SmallCard} from "../../cards/smallCard";
import ApiRequest from "../../../services/api-services";
export const Bulletine = () => {
    const [bulletine, setBulletine] = useState([])

    const updateBulletineHandler = () => {
        ApiRequest.get('news/all?page=1&perPage=3').then((data) => {
            setBulletine(data?.data?.data)
        }).catch(e => console.log(e))
    }


    useEffect(() => {
        updateBulletineHandler();
    }, [])

  return(
      <div className={'mt_30'}>
          <h1 className={'headingTitle'} style={{marginBottom: '40px', marginLeft: '25px'}}>Our update bulletin</h1>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              {
                  bulletine && bulletine.map((value, i) => (
                      <SmallCard {...value} key={i} showDate={false}/>
                  ))
              }
          </div>
          <a href='@/pages#' className={'readMore'} style={{textAlign: 'center'}}> Read More <span className={'arrow'}>&#8250;</span></a>
      </div>
  )
}