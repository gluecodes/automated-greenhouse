import React from 'react'
import styles from './styles.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export default () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={bootstrap['spinner-border']} role='status'>
        <span className={bootstrap['visually-hidden']}>Loading...</span>
      </div>
    </div>
  )
}
