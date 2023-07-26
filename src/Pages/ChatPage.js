import React from 'react'
import ChatPageLeft from '../Components/ChatPageLeft'


function ChatPage() {
  return (
    <>
      <div id="chatbgimage" className=" bg-slate-500 fixed bottom-0 top-0 w-[1600px]">
        <ChatPageLeft nutrition="Nutrition" delivery = "Delivery" 
             afterdelivery="After Delivery" mentalhealth="Mental Health" discomfort="Discomforts"
             medication="Medication" dangersigns="Danger Signs" othermatters="Other Matters"/>
      
        
      </div>
    </>
  )
}

export default ChatPage