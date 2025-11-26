import React, { useState } from 'react'
import { FaYoutube } from 'react-icons/fa6'
import './Chats.css'
import Chatlist from './Chatlist'
import Textinput from './Textinput'
import Login from './Login'

const Chat = () => {
  const [user, setUser] = useState(localStorage.getItem('user'))

  return (
    <div>
      {user ? (
        <>
          <div className='div3'>
            <h4>username: tayim</h4>
            <p><FaYoutube /> code with tayim</p>
            <p className='ch_out'>
              <strong>Logout</strong>
            </p>
          </div>

          <Chatlist />
          <Textinput />
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  )
}

export default Chat
