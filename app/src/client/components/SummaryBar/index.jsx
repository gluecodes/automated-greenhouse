import React from "react";
import styles from './styles.css'

export default ({ summaryItems, modeButtons }) => (
  <div className={styles.container}>
    <div className={styles.summaryItemsWrapper}>
      {
        summaryItems.map(item => (
          <p className={styles.text}>{item.text}</p>
        ))
      }
    </div>
    <div className={styles.modeButtonsWrapper}>

    </div>
  </div>
)