import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.css'

export default ({ props, data }) => {
  return (
    <>
      <label
        className={`${bootstrap['form-label']} ${bootstrap['mb-3']} ${bootstrap['text-capitalize']}`}>
        {props.title.split('_').join(' ')}
      </label>
      {/* <FontAwesomeIcon
        className={styles.icon}
        icon={['fas', 'question']}></FontAwesomeIcon> */}
      {props.sliders.map((slider, index) => {
        let currentValue = slider.settings.defaultValue
        return (
          <div
            key={`${slider.title}_${index}`}
            className={`${bootstrap['col-md-10']} ${bootstrap['p-3']}`}>
            <div
              className={`${bootstrap['d-flex']} ${bootstrap['justify-content-between']}`}>
              <label
                className={`${bootstrap['mb-2']} ${bootstrap['text-capitalize']} ${bootstrap['justify-content-center']}`}>
                {slider.title.split('_').join(' ')}
              </label>
              <label id={`${slider.title}_${index}`} className={bootstrap['']}>
                {currentValue}
              </label>
            </div>

            <div className={`${bootstrap['d-flex']} ${bootstrap['p-2']}`}>
              <label>{slider.settings.minValue}</label>
              <input
                onChange={(e) => {
                  document.getElementById(
                    `${slider.title}_${index}`
                  ).innerHTML = e.target.value
                }}
                type='range'
                className={`${bootstrap['form-range']} ${styles.slider} ${bootstrap['mx-3']}`}
                min={slider.settings.minValue}
                max={slider.settings.maxValue}
                defaultValue={slider.settings.defaultValue}></input>
              <label>{slider.settings.maxValue}</label>
            </div>
          </div>
        )
      })}
    </>
  )
}
