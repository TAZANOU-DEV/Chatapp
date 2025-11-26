import React from 'react'
import _ from 'lodash'
import { FaReact } from 'react-icons/fa6'

const Login = ({setUser}) => {

    const [userName, setUserName] = useState()
    const handleUser = () => {
      if(!userName) return;
      localStorage.setItem('user', userName)
      setUser(userName)
      localStorage.setItem('avatar', "https://picsum.dev/image/${_.random(1,1000)}/view")
    }

  return (
    <div>

        <div>
        <FaReact />
        <h1>chat app</h1>
        </div>

        <div>
           <input type="text" placeholder='enter your name' onChange={(e) => setUserName(e.target.value)} />
           <button onClick={handleUser}>login</button>

        </div>
    </div>
  )
}

export default Login