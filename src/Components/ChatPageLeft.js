import React from 'react';

import { useState } from "react";
import ChatArea from './ChatArea';


function ChatPageLeft(prop) {
  const [topic, setTopicSelected] = useState("Topic of Interest")
  
  return (
    <>
      <div className="flex">
        <div id="chatrightimage" className=" p-[50px] bg-green-100 w-[250px] h-[760px] mt-5 ml-5">
            <img src="https://bwhi.org/wp-content/uploads/2019/02/pregnant-woman-happy1.jpg" alt="pregnant lady" className="rounded-full w-[150px] h-[150px]"/>
            
            <div className="bg-[#F4F2F2] p-3 mt-8 divide-y divide-solid divide-green-700 shadow-lg">
              <div onClick={()=>setTopicSelected(prop.nutrition)} className="p-2 text-[14px] cursor-pointer">{prop.nutrition}</div>
              <div onClick={()=>setTopicSelected(prop.delivery)} className="p-2 text-[14px] cursor-pointer">{prop.delivery}</div>
              <div onClick={()=>setTopicSelected(prop.afterdelivery)} className="p-2 text-[14px] cursor-pointer">{prop.afterdelivery}</div>
              <div onClick={()=>setTopicSelected(prop.mentalhealth)} className="p-2 text-[14px] cursor-pointer">{prop.mentalhealth}</div>
              <div onClick={()=>setTopicSelected(prop.discomfort)} className="p-2 text-[14px] cursor-pointer">{prop.discomfort}</div>
              <div onClick={()=>setTopicSelected(prop.medication)} className="p-2 text-[14px] cursor-pointer">{prop.medication}</div>
              <div onClick={()=>setTopicSelected(prop.dangersigns)} className="p-2 text-[14px] cursor-pointer">{prop.dangersigns}</div>
              <div onClick={()=>setTopicSelected(prop.othermatters)} className="p-2 text-[14px] cursor-pointer">{prop.othermatters}</div>
            
            </div>
          </div> 
          
          
          <ChatArea topic ={topic}/>
   
     </div>
      
  
    </>
  )
}

export default ChatPageLeft