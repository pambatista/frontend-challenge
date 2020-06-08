import React from 'react'

import remove from '../../asserts/icon-remove.svg'
import { CardContent } from './style'

const Card = (props) => (
  <CardContent>
    <div>
      <h3>Veículo</h3>
      <p><span>Placa</span> {props.vehicle.plate}</p>
    </div>
    <button onClick={()=>props.remove()}><img src={remove}/></button>
  </CardContent>
)

export default Card
