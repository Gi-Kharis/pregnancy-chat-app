import React from 'react'

function SenderDiv({responses}) {
  // console.log(responses)
   const data= responses.map((response, index)=>  <div key={index} className="bg-[#c8bcbc] w-[500px] text-green-900 text-sm p-3 mb-3">{response}</div>)
  return (
    <>
      
            <div>
                <p className="text-[9px]">Gifty</p>
             
            </div>
        {data}
       
    </>
  )
}

export default SenderDiv