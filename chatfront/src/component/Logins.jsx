import { FaReact } from 'react-icons/fa6'
import React, { useState } from 'react'
import _ from 'lodash'

const Logins = ({ setUser }) => {
  const [userName, setUserName] = useState("")

  const handleuser = () => {
    if (!userName.trim()) return;

    localStorage.setItem('user', userName)
    setUser(userName)

    const avatar = `https://picsum.photos/id/${_.random(1, 1000)}/200/200`
    localStorage.setItem('avatar', avatar)
  }

  return (
    <div>
      <div>
        <FaReact />
        <h1>Chat app</h1>
      </div>

      <div>
        <input 
          type="text"
          placeholder="enter your name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleuser}>Login</button>
      </div>
    </div>
  )
}

export default Logins
