import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Loader } from '../index'

library.add(fas, fab)

export default ({ cards }) => {
  return (
    <div className={`${bootstrap.container}`}>
      <div className={`${bootstrap.row}`}>
        {!cards ? (
          <Loader />
        ) : (
          cards.map((card, index) => (
            <div key={`${card.title}_${index}`} className={bootstrap['col-3']}>
              <div
                className={`${bootstrap.card} ${bootstrap['text-center']} ${bootstrap['bg-transparent']} ${bootstrap['text-light']} ${bootstrap['border-white']}`}>
                <div
                  className={`${bootstrap['card-header']} ${bootstrap['border-light']} ${styles.cardHeader}`}>
                  {card.name}
                </div>
                <div className={`${bootstrap['card-body']} ${styles.cardBody}`}>
                  <FontAwesomeIcon
                    className={`${styles.icon} ${
                      card.isOn ? styles[card.name] : ''
                    }`}
                    icon={[card.icon.prefix, card.icon.name]}></FontAwesomeIcon>
                </div>
                <div
                  className={`${bootstrap['card-footer']} ${bootstrap['text-white']} ${bootstrap['border-light']}`}>
                  {`${card?.sensor?.name}: ${card?.sensor?.reading}`}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
