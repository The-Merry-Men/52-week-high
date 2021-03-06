import React from 'react';
import styles from '../css/showBarInfo.css';

const ShowBarInfo = (props) => {
  if (props.isToggleOn) {
    return (
      <div className={styles.showInfo}  style={{color: marketHours ? 'rgb(256, 256, 256)' : 'rgb(0, 0, 0)'}}>
        <span className={styles.showInfoRow}>Price: {props.showPrice}</span><span className={styles.showInfoRow}>Volume: {props.showVolume}</span></div>
    )
  }
  return (<div></div>)

}

export default ShowBarInfo;