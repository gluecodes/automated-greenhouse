import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import styles from './styles.css'
import { Loader } from '../index'

export default ({ summaryItems, modeButtons }) => {
  return (
    <div
      className={`${bootstrap['container-fluid']} ${bootstrap['p-4']} ${bootstrap['d-flex']} ${bootstrap['justify-content-between']} ${styles.summaryBarWrapper}`}>
      {!summaryItems || !modeButtons ? (
        <Loader />
      ) : (
        <>
          <ul
            className={`${bootstrap['list-group']} ${bootstrap['list-group-flush']} ${styles.listWrapper}`}>
            {summaryItems.map((item, index) => (
              <li
                key={`${item.name}_${index}`}
                className={`${bootstrap['list-group-item']} ${bootstrap['border-light']} ${bootstrap['d-flex']} ${bootstrap['justify-content-between']} ${bootstrap['align-items-center']} ${styles.listItem}`}>
                {`${item.name}: `}
                <span
                  className={`${bootstrap.badge} ${bootstrap['bg-success']} ${bootstrap['rounded-pill']}`}>
                  {item.reading}
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
        </>
      )}
    </div>
  )
}
