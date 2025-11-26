import React from 'react'
import './Chats.css'

function Chatlist({chats}) {
    const user = localStorage.getItem('user')
    function SenderChat ({message, username, avatar}) {
        return (

                 <div className='sender'>
                    <img className='img' src={avatar} alt="" />
                    <div className='strong'><strong>{username}</strong>
                    {message}
                    </div>
                 </div>

        )
    }

     function ReceiverChat ({message, username, avatar}) {
        return (

                 <div className='receiver'>
                    <img className='img' src={avatar} alt="" />
                    <div className='strong'><strong>{username}</strong>
                    {message}
                        </div>
                 </div>

        )
    }
  return (
    <div className='chats_list'>
      {
        chats.map((chat, index) => {
            if(chat.user === user){
             return  <SenderChat
             key={index}
             message = {chat.message}
             username = {chat.user}
             avatar = {chat.avatar}/>
            }
              return  <ReceiverChat
             key={index}
             message = {chat.message}
             username = {chat.user}
             avatar = {chat.avatar}/>

        })
      }
        <SenderChat />
        <ReceiverChat />
    </div>
  )
}

export default Chatlist