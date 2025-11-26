
import { FaReact } from 'react-icons/fa6'
import React, { useState } from 'react'
import _ from 'lodash'


const Logins = ({setUser}) => {
    const [userName, setUserName] = useState("")
    const handleuser = () => {
        if(!userName) return;
        localStorage.setItem('user', userName)
        setUser(userName)
        localStorage.setItem('avatar', 'https://picsum.dev/image/${_.random(1,1000)}/view')
    }

  return (
    <div>
        <div><FaReact />
        <h1>Chat app</h1></div>

        <div>
            <input type="text"  placeholder='enter your name'
             onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={handleuser}>Login</button>
        </div>
    </div>
  )
}

export default Logins