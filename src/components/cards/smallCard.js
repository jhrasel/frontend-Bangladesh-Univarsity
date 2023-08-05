import styles from './card.module.css'
export const SmallCard = (props) => {
    const {subtitles, title, date, image,dateTime } = props
    return(

        <>
            <div className={styles.mainSmallCard}>
                <img
                    src={image.src}
                    alt="Picture of the date"
                    width='100%'
                />
                {
                    date && (
                        <div className={styles.date}>
                            <p>26 Feb</p>
                        </div>
                    )
                }

                <div className={styles.cardDetials}>
                    <p className={styles.subtitle}>
                        {subtitles}
                    </p>
                    <h4 className={styles.title}>{title}</h4>
                    <p className={[styles.subtitle , styles.subtitleFont].join(' ')}>
                        {dateTime}
                    </p>
                </div>

            </div>
        </>
    )
}