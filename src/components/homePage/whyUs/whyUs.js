import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useQuery } from "react-query";
import { CardWithImage } from "../../../components/cards/CardWithImage";
import ApiRequest from "../../../services/api-services";
import styles from '../../slider/sliderWithButton.module.css';
import { WhyPreloader } from "../whyUs/whyPreloader";

export const WhyUs = () =>{
    const [key, setKey] = useState('Benefits');

    const { isLoading, data:tabData } = useQuery('tab_list', () => ApiRequest.get('need_tab/all'))

    return (
        <Container className='mainWhyus'>
            <h1 className={'sectionHeading'}>What Sets Us Apart</h1>
            <p className='sectionSubtitle'>Discover What Makes Our Institution Stand Out and Get Competitive Edge That Await You at Our Institution.</p>
            {
                isLoading && <WhyPreloader />
            }
            <Tabs
                id="why_us"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className={styles.whyUs_tab}
            >

                {
                    tabData?.data?.body?.length && tabData?.data?.body?.map((item, index) => {
                        return(
                            <Tab key={index} eventKey={item?.tab} title={item?.tab} className={styles.tabs} tabClassName={styles.tabz}>
                                <CardWithImage
                                    isVisiableRightImg={true}
                                    isVisiableLftImg={false}
                                    button={false}
                                    title={item?.title}
                                    description={item?.description}
                                    photo={item?.photo}
                                />
                            </Tab>
                        )
                    })
                }

            </Tabs>

        </Container>
    );
}

