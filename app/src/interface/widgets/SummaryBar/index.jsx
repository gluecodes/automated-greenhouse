import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles.css'
import { Loader } from '../index'
import { List, Switch } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ summaryItems, modes, navigation }) => (
  <div
    className={`${bootstrap['container-fluid']} ${bootstrap['d-flex']}  ${bootstrap['p-4']} ${bootstrap['mb-5']} ${styles.summaryBarWrapper}`}>
    {summaryItems.length <= 0 ? (
      <Loader />
    ) : (
      <>
        <div
          className={`${bootstrap['me-auto']} ${bootstrap['p-2']} ${bootstrap['w-25']}`}>
          <List summaryItems={summaryItems} />
        </div>
        <div className={`${bootstrap['p-2']} ${bootstrap['pt-3']}`}>
          <Switch modes={modes} />
        </div>
        <div className={bootstrap['p-2']}>
          {navigation.map((nav, index) => (
            <a
              key={`${nav.text}_${index}`}
              href={nav.redirect}
              className={styles.iconWrapper}>
              <FontAwesomeIcon
                className={styles.icon}
                icon={nav.icon}></FontAwesomeIcon>
            </a>
          ))}
        </div>
      </>
    )}
  </div>
)
