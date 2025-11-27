import React from 'react'
import './Chats.css'

function Chatlist({ chats }) {

  const user = localStorage.getItem('user')

  function SenderChat({ message, username, avatar }) {
    return (
      <div className='sender'>
        <img className='img' src="https://picsum.dev/image/1276/view" alt='' />
        <div className='strong'>
          <strong>{username}</strong>
          <p>{message}</p>
        </div>
      </div>
    )
  }

  function ReceiverChat({ message, username, avatar }) {
    return (
      <div className='receiver'>
        <img className='img' src="https://picsum.dev/image/1276/view" alt='' />
        <div className='strong'>
          <strong>{username}</strong>
          <p>{message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='chats_list'>
      {chats.map((chat, index) => {
        const isSender = chat.user === user

        if (isSender) {
          return (
            <SenderChat
              key={index}
              message={chat.message}
              username={chat.user}
              avatar={chat.avatar}
            />
          )
        }

        return (
          <ReceiverChat
            key={index}
            message={chat.message}
            username={chat.user}
            avatar={chat.avatar}
          />
        )
      })}
    </div>
  )
}

export default Chatlist
