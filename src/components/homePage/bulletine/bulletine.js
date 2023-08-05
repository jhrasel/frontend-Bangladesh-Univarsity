import {useState} from 'react'
import {SmallCard} from "../../cards/smallCard";
import image from '../../../assets/image/small_card/small_card.png'
export const Bulletine = () => {
    const [bulletine, setBulletine] = useState([
        {
            id: 0,
            subtitles: 'Careers',
            title: 'How to become an entrepreneur & Self dependent',
            dateTime: '22 February, 2023',
            image: image,
            date: false,
        },
        {
            id: 1,
            subtitles: 'Careers',
            title: 'How to become an entrepreneur & Self dependent',
            dateTime: '22 February, 2023',
            image: image,
            date: false,
        },
        {
            id: 2,
            subtitles: 'Careers',
            title: 'How to become an entrepreneur & Self dependent',
            dateTime: '22 February, 2023',
            image: image,
            date: false,
        }
    ])
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