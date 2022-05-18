import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

export default ({ modes }) => {
  return (
    <div
      className={`${bootstrap['btn-group']} ${bootstrap['align-middle']}`}
      role='group'>
      {modes.map((button, index) => (
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
  )
}
