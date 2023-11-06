import styled from './pageBanner.module.css';


export const PageBanner = ({ photo, title}) => { 
    return (
        <div className={styled.mainPageBanner}>
            <div className={styled.banner}>
                <div className={styled.heading}>
                    <img src={photo} alt='banner' />
                </div>
                
                <div className={styled.overlay}>
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    )
}
