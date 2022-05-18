import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { Slider } from '../../components'

export default ({ model, submit, cancel }) => {
  return (
    <div className={bootstrap.container}>
      <div
        className={`${bootstrap.row} ${bootstrap['d-flex']}  ${bootstrap['justify-content-center']} ${bootstrap['p-4']} ${bootstrap['text-white']}`}>
        <div className={bootstrap['col-md-8']}>
          <form>
            {model.map((props, index) => {
              switch (props.component) {
                case 'Slider':
                  return <Slider key={index} props={props} />
              }
            })}
          </form>
        </div>
      </div>
    </div>
  )
}
