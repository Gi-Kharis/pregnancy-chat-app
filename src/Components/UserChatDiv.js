import React from 'react'

function UserChatDiv({messages}) {
  return (
    <>
       
            <div>
                <p className="text-[9px]"></p>
            
            </div>
            <div>
               {messages.map((message,index)=><div key={index} className="bg-[#E4E4E4] w-[500px] mb-5 text-green-900 text-sm p-3">{message}</div> )}
            </div>
            
    </>
  )
}

export default UserChatDiv