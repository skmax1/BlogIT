import { useState } from "react"
import { ButtonComponent } from "../components/Button"
import { Header } from "../components/Header"
import { InputFields } from "../components/InputBox"
import { Welcome } from "../components/Welcome"
import { SignupInput } from "@sparta1/blogit-common"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"

export const SignUp = () =>{
    const navigate = useNavigate()
    const [getInputs,setGetInputs] = useState<SignupInput>({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

   async function sendRequest(){
    try{
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,getInputs);
        const jwt = response.data.token;
        localStorage.setItem("token",jwt)
        navigate("/post")
    } catch(e){
        //error response

    }
    }
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-screen flex justify-center flex-col">
                <div className="flex justify-center">
                     <div>
                     <Header label1="Create an Account" label2="Already have an account?" label3="Login" path="/signin"></Header>
                     <div className='pt-8'>
                           <InputFields label = "First name" placeholder='Your first name' onChange={(e) => {
                            setGetInputs(c =>({
                                ...c,
                                firstName: e.target.value
                            }))
                           }}></InputFields>
                           <InputFields label='Last name' placeholder='You last name'onChange={(e) => {
                            setGetInputs(c =>({
                                ...c,
                                lastName: e.target.value
                            }))
                           }}></InputFields>
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
                           <ButtonComponent label="Sign Up" onClick={sendRequest}></ButtonComponent>
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