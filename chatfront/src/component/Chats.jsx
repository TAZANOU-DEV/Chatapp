import React, { useEffect, useState } from 'react'
import { FaYoutube } from 'react-icons/fa6'
import './Chats.css'
import Chatlist from './Chatlist'
import Textinput from './Textinput'
import Logins from './Logins'
import socketIOClient from 'socket.io-client'


function Chats() {
    const [user, setUser] = useState(localStorage.getItem("user"))
    const socketio = socketIOClient("http://localhost:3001")
    const [chats, setChats] = useState([])

    useEffect(() => {
      socketio.on("chat", (Chats) => {
         setChats(chats)
      })
    })

  return (
    <div>
        {user ? (
        <div>
            <div className='div3'>
                <h4>username: Tayim</h4>
                <p><FaYoutube /> code with Tayim</p>
                <p><strong>Logout</strong></p>
            </div>
            <Chatlist />
            <Textinput />
        </div>
        ):
        <Logins setUser = {setUser}/>
    }
    </div>
  )
}

export default Chats