import React from 'react'
import { PersonProps } from './Persion.types'


const Person = ({name}: PersonProps) => {
  return (
    <div>{name.first} {name.last}</div>
  )
}

export default Person