import React, { useState } from 'react'
import './Chats.css'

function Textinput({ addMessage }) {

  const [message, setMessage] = useState("")

  const sendMessage = () => {
    if (!message.trim()) return; // prevent empty messages

    addMessage({ message })
    setMessage("")  // reset input after sending
  }

  return (
    <div className='inputtext_container'>
      <textarea 
        name="message" 
        id="message" 
        rows="6"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Textinput
