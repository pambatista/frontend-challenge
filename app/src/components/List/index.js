import React from 'react'

import { ListContent } from './style'

// components
import Card from '../Card'

const List = (props) => (
  <ListContent>
    {
      props.vahicles.map((vehicle,index) => (
        <Card
          key={index}
          vehicle={vehicle}
          remove={()=> props.removeVehicle(vehicle)}
        />
      )).reverse()
    }
  </ListContent>
)

export default List
