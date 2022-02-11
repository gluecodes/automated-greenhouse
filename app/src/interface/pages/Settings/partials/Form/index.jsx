import React from 'react'
import { Form } from '../../../../widgets'

export default () => {
  const model = [
    {
      title: 'temperature_range',
      component: 'Slider',
      sliders: [
        {
          title: 'minimum_temperature',
          settings: {
            minValue: 0,
            maxValue: 100,
            defaultValue: 20
          }
        },
        {
          title: 'maximum_temperature',
          settings: {
            minValue: 0,
            maxValue: 100,
            defaultValue: 60
          }
        }
      ],
      data: {}
    }
  ]
  return <Form model={model} />
}
