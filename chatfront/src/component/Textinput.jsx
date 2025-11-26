import React from 'react'
import './Chats.css'

function Textinput() {
  return (
    <div className='inputtext_container'>
        <textarea name="message" id="message" rows='6'></textarea>
        <button>Send</button>
    </div>
  )
}

export default Textinput