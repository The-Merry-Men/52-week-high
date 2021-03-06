import React from 'react';
import styles from '../css/pricePercentageAboveBelow.css';

const Percentage = (props) => {
  if (props.price > props.average) {
    return (
      <div className={styles.pricePercentageContainer} >
        <div className={styles.currentPricePercentage}>
        <span style={{color: props.marketUp ? '#21ce99' : '#f45531'}}>{props.percent} Higher</span>
        </div>
        <div className={styles.currentPricePercentage}>
          <span style={{color: props.marketUp ? '#21ce99': '#f45531' }} id={styles.rightNow}>Right Now</span>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.pricePercentageContainer} >
      <div className={styles.currentPricePercentage}>
      <span style={{color: props.marketUp ? '#21ce99' : '#f45531'}}>{props.percent} Lower</span>
      </div>
      <div className={styles.currentPricePercentage}>
        <span style={{color: props.marketUp ? '#21ce99' : '#f45531' }} id={styles.rightNow}>Right Now</span>
      </div>
    </div>
  )
}
export default Percentage;