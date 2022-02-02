import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles.css'

export default ({ summaryItems, modeButtons }) => (
  <div
    className={`${bootstrap['container-fluid']} ${bootstrap['p-4']} ${bootstrap['d-flex']} ${bootstrap['justify-content-between']}`}>
    <ul
      className={`${bootstrap['list-group']} ${bootstrap['list-group-flush']} ${styles.listWrapper}`}>
      {summaryItems.map((item, index) => (
        <li
          key={`${item.text}_${index}`}
          className={`${bootstrap['list-group-item']} ${bootstrap['border-light']} ${bootstrap['d-flex']} ${bootstrap['justify-content-between']} ${bootstrap['align-items-center']} ${styles.listItem}`}>
          {`${item.text}: `}
          <span
            className={`${bootstrap.badge} ${bootstrap['bg-success']} ${bootstrap['rounded-pill']}`}>
            {item.value}
          </span>
        </li>
      ))}
    </ul>
    <div className={`${bootstrap['btn-group']}`} role='group'>
      {modeButtons.map((button, index) => (
        <div key={`${button.text}_${index}`} onClick={button.submit}>
          <input
            type='radio'
            className={`${bootstrap['btn-check']}`}
            name={'control'}
            id={`${button.text}_${index}`}
            autoComplete='off'
          />
          <label
            className={`${bootstrap.btn} ${bootstrap['btn-success']}`}
            htmlFor={`${button.text}_${index}`}>
            {button.text}
          </label>
        </div>
      ))}
    </div>
  </div>
)
