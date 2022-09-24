import React from 'react'

type GreetProps = {
  name: string,
  messageCount?: number,
  isLogin: boolean
}

const Greet = ({name, messageCount, isLogin}: GreetProps) => {
  messageCount = 0
  return (
    <div>
      <h2>
        {
          isLogin ? `Welcome ${name} i told you the numner is ${messageCount}` : 'Welcome guest better login'
        }
        </h2>
    </div>
  )
}

export default Greet