import styles from './styles.module.css';
export const CourseDetails = ({ value }) => {
    const first = value?.children?.filter((value) => value?.semester === 'first');
    const second = value?.children?.filter((value) => value?.semester === 'second');
    const third = value?.children?.filter((value) => value?.semester === 'third');
    const fourth = value?.children?.filter((value) => value?.semester === 'fourth');
    const fifth = value?.children?.filter((value) => value?.semester === 'fifth');
    const sixth = value?.children?.filter((value) => value?.semester === 'sixth');
    const seventh = value?.children?.filter((value) => value?.semester === 'seventh');
    const eighth = value?.children?.filter((value) => value?.semester === 'eighth');
    const ninth = value?.children?.filter((value) => value?.semester === 'ninth');
    const tenth = value?.children?.filter((value) => value?.semester === 'tenth');
    const eleventh = value?.children?.filter((value) => value?.semester === 'eleventh');
    const twelfth = value?.children?.filter((value) => value?.semester === 'twelfth');

    const firstCourseCredit = first.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const secondCourseCredit = second.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const thirdCourseCredit = third.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const fourthCourseCredit = fourth.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const fifthCourseCredit = fifth.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const sixthCourseCredit = sixth.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const seventhCourseCredit = seventh.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const eighthCourseCredit = eighth.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const ninthCourseCredit = ninth.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const tenthCourseCredit = tenth.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const eleventhCourseCredit = eleventh.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);
    const twelfthCourseCredit = twelfth.map(value => value?.credits).reduce((acc, curr) => acc + curr, 0);

  return(
      <>
          {
              first?.length > 0 && (
                <div className={styles.courseDetails}>
                    <div className={styles.heading_title}>
                        <h4>{'First Semester'}</h4>
                          <h4>Total Credit: { firstCourseCredit}</h4>
                        </div>
                    {
                        first.map((item, i) => { 
                            
                            return (
                                <div className={styles.tablebody}  key={i}>
                                    <p>{item?.courseCode}</p>
                                    <p>{item?.title}</p>
                                    <p>{item?.credits}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
          }
        
          {
              second?.length > 0 && (
            <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Second Semester'}</h4>
                <h4>Total Credit: { secondCourseCredit}</h4>
                </div>
            {
                second.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>
            )
          }

          
        {
            third?.length > 0 && (
                        <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Thrid Semester'}</h4>
                <h4>Total Credit: { thirdCourseCredit}</h4>
                </div>
            {
                third.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>      
            )
          }
          

          {
              fourth?.length > 0 && (
                  
                          <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Fourth Semester'}</h4>
                <h4>Total Credit: { fourthCourseCredit}</h4>
                </div>
            {
                fourth.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>
            )
          }

          {
              fifth?.length > 0 && (
                          <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Fifth Semester'}</h4>
                <h4>Total Credit: {fifthCourseCredit}</h4>
                </div>
            {
                fifth.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>
            )
          }

          {
              sixth?.length > 0 && (
                  
                          <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Sixth Semester'}</h4>
                <h4>Total Credit: {sixthCourseCredit}</h4>
                </div>
            {
                sixth.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>
            )
          }

          
          {
              seventh?.length > 0 && (
                  
                          <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Seventh Semester'}</h4>
                <h4>Total Credit: {seventhCourseCredit}</h4>
                </div>
            {
                seventh.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>
            )
          }

          
          {
              eighth?.length > 0 && (
                  
                          <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Eighth Semester'}</h4>
                <h4>Total Credit: {eighthCourseCredit}</h4>
                </div>
            {
                eighth.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>
            )
          }

          {
              ninth?.length > 0 && (
                  
                          <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Ninth Semester'}</h4>
                <h4>Total Credit: {ninthCourseCredit}</h4>
                </div>
            {
                ninth.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>
            )
          }

          
          {tenth?.length > 0 && (
              
                      <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Tenth Semester'}</h4>
                <h4>Total Credit: {tenthCourseCredit}</h4>
                </div>
            {
                tenth.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>
          )}

          
          {
              eleventh?.length > 0 && (
                          <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Eleventh Semester'}</h4>
                <h4>Total Credit: {eleventhCourseCredit}</h4>
                </div>
            {
                eleventh.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>
            )
          }

          {
              twelfth?.length > 0 && (
                  
                          <div className={styles.courseDetails}>
            <div className={styles.heading_title}>
                <h4>{'Twelfth Semester'}</h4>
                <h4>Total Credit: {twelfthCourseCredit}</h4>
                </div>
            {
                twelfth.map((item, i) => { 
                    
                    return (
                        <div className={styles.tablebody}  key={i}>
                            <p>{item?.courseCode}</p>
                            <p>{item?.title}</p>
                            <p>{item?.credits}</p>
                        </div>
                    )
                })
            }
        </div>
            )
          }
          
      </>
  );
}