import styled from './pageBanner.module.css';


export const PageBanner = ({ photo, title, position }) => { 
    const  sectionStyle = {
        width: "100%",
        height: "300px",
        backgroundImage: "url(" + photo + ")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundPosition: position,
        backgroundSize: 'cover'
    };
    return (
        <div className={styled.mainPageBanner} style={sectionStyle}>
            <div className={styled.banner}>
                <div className={styled.heading}>
                    {/* <img src={photo} alt='banner' /> */}
                </div>
                
                <div className={styled.overlay}>
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    )
}
