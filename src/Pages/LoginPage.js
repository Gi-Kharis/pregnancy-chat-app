import React from 'react'
import { Outlet, Link } from "react-router-dom";
// import Login from '../Components/Login'

function LoginPage() {
  return (
    <>
    
        <div id="body-bg-img" className="flex items-center pl-[550px] pb-[100px]">
            <div className="bg-slate-100 p-5 w-[450px] h-[350px] rounded-lg drop-shadow-2xl hover:shadow-2xl">
                <p className="text-green-950 text-[24px] text-center m-6">Login</p>
                <form>
                    <label htmlFor="username" className="p-3 text-[#1C754E] text-[16px]">Username</label>
                    <input type="text" id="username" className="mb-6 w-[300px] h-[35px] rounded-lg drop-shadow-xl"/><br></br>
                    <label htmlFor="password" className="pl-3 pr-4 text-[#1C754E] text-[16px]">Password</label>
                    <input type="password" id="password" className="w-[300px] h-[35px] rounded-lg mb-2 drop-shadow-xl"/>
                    
                    <div className="flex pl-[98px] mb-7">
                        <Link to= "/password_recovery" className="text-xs text-red-800 mr-[110px]" >Forgotten Password?</Link>
                        <Link to= "/sign_up" className="text-xs text-red-800">No account?</Link>
                    </div>
                    
                    <div className="bg-[#1C754E] justify-center drop-shadow-xl hover:shadow-2xl rounded-lg w-[150px] text-white text-[16px] p-3 ml-[160px] mt-7 hover:scale-125">
                    <Link to="/chat" className="ml-6">Let's Talk</Link>
                    
                    </div>
                    
                </form>
                
            </div>
            
        </div> 
        <Outlet/>
    
    
    </>
  )
}

export default LoginPage