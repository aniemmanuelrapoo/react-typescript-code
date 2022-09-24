import React from 'react'

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

function Button({handleClick}: ButtonProps) {
  return (
    <button onClick={event => handleClick(event, 1)}>Click</button>
  )
}

export default Button