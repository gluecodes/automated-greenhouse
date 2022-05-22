import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { Loader } from '../index'
import { Card } from '../../components'

export default ({ cards }) => {
  return (
    <div className={`${bootstrap.container}`}>
      <div className={`${bootstrap.row} ${bootstrap['justify-content-center']}`}>
        {!cards ? (
          <Loader />
        ) : (
          cards.map((card, index) => (
            <Card key={`${card.name}_${index}`} card={card} />
          ))
        )}
      </div>
    </div>
  )
}
