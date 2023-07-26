
import {Link } from "react-router-dom";


function CreateAccount() {
 
  
  function handleFormSubmit(event){
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  
  
  
  return (
    <>
        <div id="body-bg-img" className="flex items-center pl-[550px] pb-[100px]">
            <div className="bg-slate-100 p-5 w-[450px] h-[550px] rounded-lg drop-shadow-2xl hover:shadow-2xl">
              <Link to="/" className="ml-2 mr-8 mt-5 text-red-900 text-sm">Log out</Link>
                <p className="text-green-950 text-[18px] text-center m-6">Register</p>
                <form method="post" onSubmit={handleFormSubmit}>
                    <label htmlFor="firstname" className="p-3 text-[14px] text-[#1C754E]">First Name </label>
                      <input  type="text" name="firstname" id="firstname" defaultValue="first name" autoComplete="true" className="font-thin text-xs mb-5 pl-3 w-[300px] h-[35px] rounded-lg drop-shadow-xl"/><br></br>
                   

                    <label htmlFor="lastname" className="p-3 text-[14px] text-[#1C754E]">Last Name </label>
                      <input type="text" id="lastname" defaultValue="last name" name="lastname" autoComplete="true" className="font-thin text-xs mb-5 w-[300px]  pl-3 h-[35px] rounded-lg drop-shadow-xl"/><br></br>
                   

                    <label htmlFor="email" className=" text-[14px] pl-3 pr-[45px] text-[#1C754E]">Email</label>
                      <input name="email" id="email" defaultValue="someone@social.com" type="email" autoComplete="true" className=" font-thin text-xs w-[300px]  pl-3 h-[35px] rounded-lg mb-5 drop-shadow-xl"/>
                    

                    <div>
                        <label htmlFor="region" className="pl-3 pr-[35px] text-[14px] text-[#1C754E]">Region</label>
                        <select id="region" name="region" autoComplete="true"  className=" text-green-900 pl-2 text-xs mb-5 w-[300px] h-[35px] rounded-lg drop-shadow-xl">
                          
                          
                          <option value="ahafo">Ahafo</option>
                          <option value="ashanti">Ashanti</option>
                          <option value="bono">Bono</option>
                          <option value="bono east">Bono East</option>
                          <option value="central">Central</option>
                          <option value="eastern">Eastern</option>
                          <option value="greater accra">Greater Accra</option>
                          <option value="northern">Northern</option>
                          <option value="north east">North East</option>
                          <option value="oti">Oti</option>
                          <option value="savannah">Savannah</option>
                          <option value="upper east">Upper East</option>
                          <option value="upper west">Upper West</option>
                          <option value="volta">Volta</option>
                          <option value="western">Western</option>
                          <option value="western north">Western North</option>
                        
                        </select>
                    
                    </div>
                    
                    
                    <div>
                    <label htmlFor="age" className="pl-3 pr-[54px] text-[14px] text-[#1C754E]">Age</label>
                    <select id="age" name="age" autoComplete="true" className=" text-green-900 pl-2 text-xs mb-5 w-[300px] h-[35px] rounded-lg drop-shadow-xl">
                      
                      
                      <option value="10-14">10-14</option>
                      <option value="15-19">15-19</option>
                      <option value="20-24">20-24</option>
                      <option value="24+">24+</option>
                    
                    </select>
                
                </div>

                        
                        <div className="ml-3">
                          <p className="text-[14px] text-[#1C754E]">Sex</p>
                          <input type="radio" name="male" value="Male" id="male"/>
                          <label htmlFor="male" className="text-sm">Male</label><br></br>
                          <input type="radio" name="female" value="Female" id="female"/>
                          <label htmlFor="female" className="text-sm">Female</label><br></br>
                        </div>

                 

                    <div className="bg-[#1C754E] justify-center drop-shadow-xl hover:shadow-2xl rounded-lg w-[100px] text-white text-[14px] p-3 ml-[160px] mt-7 hover:scale-125">
                    <input type="submit" className="ml-4"/>
                    
                    </div>
                </form>
            </div>
        </div> 
       
    </>
  )
}

export default CreateAccount