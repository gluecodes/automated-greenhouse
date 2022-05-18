import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles.css'

export default ({ summaryItems }) => {
  return (
    <ul
      className={`${bootstrap['list-group']} ${bootstrap['list-group-flush']} ${styles.listWrapper}`}>
      {summaryItems.map((item, index) => (
        <li
          key={`${item.measures}_${index}`}
          className={`${bootstrap['list-group-item']} ${bootstrap['border-light']} ${bootstrap['d-flex']} ${bootstrap['justify-content-between']} ${bootstrap['align-items-center']} ${styles.listItem}`}>
          {`${item.measures}: `}
          <span
            className={`${bootstrap.badge} ${bootstrap['bg-success']} ${bootstrap['rounded-pill']}`}>
            {item.reading}
          </span>
        </li>
      ))}
    </ul>
  )
}
