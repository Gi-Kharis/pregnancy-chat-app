import React from 'react';


function PasswordRec() {
  return (
    <>
        <div id="body-bg-img" className="flex items-center pl-[550px] pb-[100px]">
            <div className="bg-slate-100 p-5 w-[460px] h-[250px] rounded-lg drop-shadow-2xl hover:shadow-2xl justify-center">
                <p className="text-green-950 text-[16px] text-center m-6">Recover</p>
                <form>
                    
                    <input type="email" placeholder="Type your email used to open account" className=" ml-3 pl-2 text-xs w-[400px] h-[40px] rounded-lg drop-shadow-xl"/><br></br>
                    
                    <div className="flex pl-[98px] mb-7">
                        
                    </div>
                    
                    <div className="bg-[#1C754E] justify-center drop-shadow-xl hover:shadow-2xl rounded-lg w-[100px] text-white text-[14px] p-3 ml-[160px] mt-4 hover:scale-125">
                    <a href="/" className="ml-5">Send</a>
                    
                    </div>
                </form>
            </div>
        </div> 
       
    </>
  )
}

export default PasswordRec