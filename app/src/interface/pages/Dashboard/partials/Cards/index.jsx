import React from 'react'
import { Cards } from '../../../../components'

export default () => {
  const cards = [
    {
      icon: {
        prefix: 'fas',
        name: 'fan'
      },
      title: 'fan',
      summary: 'humidity: 80%',
      link: {
        text: 'example link',
        url: 'www.glue.codes'
      }
    },
    {
      icon: {
        prefix: 'fab',
        name: 'hotjar'
      },
      title: 'heater',
      summary: 'temperature: 80%',
      link: {
        text: 'example link',
        url: 'www.glue.codes'
      }
    },
    {
      icon: {
        prefix: 'fas',
        name: 'lightbulb'
      },
      title: 'lights',
      summary: 'temperature: 80%',
      link: {
        text: 'example link',
        url: 'www.glue.codes'
      }
    },
    {
      icon: {
        prefix: 'fas',
        name: 'water'
      },
      title: 'fountain',
      summary: 'temperature: 80%',
      link: {
        text: 'example link',
        url: 'www.glue.codes'
      }
    }
  ]
  return <Cards cards={cards} />
}
