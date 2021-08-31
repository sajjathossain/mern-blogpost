import { useAuth0 } from '@auth0/auth0-react'

const Dashboard = () => {
  const { user, loginWithRedirect, logout } = useAuth0()
  console.log(user)
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <img src={user?.picture} alt="userImage" />
        <h1>{user?.name}</h1>
      </div>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  )
}

export default Dashboard
