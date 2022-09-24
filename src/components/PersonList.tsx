import React from 'react'
import { Name } from './Persion.types'

type nameListArray = {
  names:Name[]
}

const PersonList = ({names}: nameListArray) => {
  return (
    <div>
      {
        names.map(name => {
          return(
            <h2 key={name.first}>{name.first} {name.last}</h2>
          )
        })
      }
    </div>
  )
}

export default PersonList