import React from 'react'

type nameListArray = {
  names:{
    first: string
    last: string
  }[]
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