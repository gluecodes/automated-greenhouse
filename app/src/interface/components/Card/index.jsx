import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles.css'
import { Loader } from '../../widgets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

export default ({ card }) => {
  return (
    <div className={`${bootstrap['col-md-3']} ${bootstrap['mb-5']}`}>
      <div
        className={`${bootstrap.card} ${styles.card} ${bootstrap['text-center']} ${bootstrap['bg-transparent']} ${bootstrap['text-light']} ${bootstrap['border-white']}`}>
        <div
          className={`${bootstrap['card-header']} ${bootstrap['border-light']} ${styles.cardHeader}`}>
          {card.name}
        </div>
        <div className={`${bootstrap['card-body']} ${styles.cardBody}`}>
          <FontAwesomeIcon
            className={`${styles.icon} ${card.isOn ? styles[card.name] : ''}`}
            icon={[card.icon.prefix, card.icon.name]}></FontAwesomeIcon>
        </div>
        <div
          className={`${bootstrap['card-footer']} ${bootstrap['text-white']} ${bootstrap['border-light']} ${bootstrap['text-capitalize']}`}>
          {!card?.sensor?.measure ? (
            <Loader />
          ) : (
            `${card.sensor.measure}: ${card.sensor.reading}`
          )}
        </div>
      </div>
    </div>
  )
}
