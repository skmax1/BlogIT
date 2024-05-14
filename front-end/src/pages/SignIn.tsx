import { useState } from "react"
import { ButtonComponent } from "../components/Button"
import { Header } from "../components/Header"
import { InputFields } from "../components/InputBox"
import { Welcome } from "../components/Welcome"
import { SiginInput } from "@sparta1/blogit-common"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const SignIn = () =>{
    const navigate = useNavigate()
    const [getInputs,setGetInputs] = useState<SiginInput>({
        email: "",
        password: ""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/sigin`,getInputs);
            const jwt = response.data.token;
            localStorage.setItem("token",jwt)
            navigate('/post')
        }catch(e){
            //throw error
        }     
    }
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-screen flex justify-center flex-col">
                <div className="flex justify-center">
                     <div>
                     <Header label1="Login to Account" label2="Don't have an account?" label3="Signup" path="/signup"></Header>
                     <div className='pt-8'>
                           <InputFields label='Email' placeholder='Your email' onChange={(e)=>{
                            setGetInputs(c =>({
                                ...c,
                                email: e.target.value
                            }))
                           }}></InputFields>
                           <InputFields label='Password' placeholder='' type={"password"} onChange={(e)=>{
                            setGetInputs(c =>({
                                ...c,
                                password: e.target.value
                            }))
                           }}></InputFields>
                           <ButtonComponent label="Sign In" onClick={sendRequest}></ButtonComponent>
                        </div>
                    </div>
                </div>
            </div>
        <div className="hidden lg:block">
               <Welcome/>
          </div>
        </div>  
    </div>

}