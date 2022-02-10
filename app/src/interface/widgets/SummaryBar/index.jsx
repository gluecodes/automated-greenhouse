import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles.css'
import { Loader } from '../index'
import { List, Switch } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ summaryItems, modeButtons }) => (
  <div
    className={`${bootstrap['container-fluid']} ${bootstrap['d-flex']}  ${bootstrap['p-4']} ${bootstrap['mb-5']} ${styles.summaryBarWrapper}`}>
    {!summaryItems || !modeButtons ? (
      <Loader />
    ) : (
      <>
        <div
          className={`${bootstrap['me-auto']} ${bootstrap['p-2']} ${bootstrap['w-25']}`}>
          <List summaryItems={summaryItems} />
        </div>
        <div className={`${bootstrap['p-2']} ${bootstrap['pt-3']}`}>
          <Switch modeButtons={modeButtons} />
        </div>
        <div className={bootstrap['p-2']}>
          <a href='#' className={styles.iconWrapper}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={['fas', 'cog']}></FontAwesomeIcon>
          </a>
        </div>
      </>
    )}
  </div>
)
