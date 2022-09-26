import { useState } from "react"

type AuthUser = {
  name: string
  email: string
}
const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null)

  const handleLogin = () => {
    setUser({
      name: 'Rapoo',
      email: 'rapoo@gmail.com'
    })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>User Name is {user?.name}</div>
      <div>User Email is {user?.email}</div>
    </div>
  )
}

export default User