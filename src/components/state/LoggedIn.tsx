import { useState } from 'react'

const LoggedIn = () => {
  const [isLoggedin, setisLoggedin] = useState(false)

  const handleLogin = () => {
    setisLoggedin(true)
  }
  const handleLogout = () => {
    setisLoggedin(false)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>User is {isLoggedin ? 'logged in' : 'logged out'}</div>
    </div>
  )
}

export default LoggedIn