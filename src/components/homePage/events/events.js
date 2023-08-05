import {SmallCard} from "../../cards/smallCard";
import image from '../../../assets/image/small_card/events.png'
import {useState} from "react";

export const Events = () => {
    const [events, setEvents] = useState([
        {
            id: 0,
            subtitles: 'Careers',
            title: 'How to become an entrepreneur & Self dependent',
            dateTime: '10:00 AM',
            image: image,
            date: true,
        },
        {
            id: 1,
            subtitles: 'Careers',
            title: 'How to become an entrepreneur & Self dependent',
            dateTime: '10:00 AM',
            image: image,
            date: true,
        },
        {
            id: 2,
            subtitles: 'Careers',
            title: 'How to become an entrepreneur & Self dependent',
            dateTime: '10:00 AM',
            image: image,
            date: true,
        }
    ])
    return(
        <div className={'mt_30'}>
            <h1 className={'headingTitle'} style={{marginBottom: '40px', marginLeft: '25px'}}>Events of alumni</h1>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                {
                    events && events.map((value, i) => (
                        <SmallCard {...value} key={i}/>
                    ))
                }
            </div>
            <a href='@/pages#' className={'readMore'} style={{textAlign: 'center'}}> Read More <span className={'arrow'}>&#8250;</span></a>
        </div>
    )
}