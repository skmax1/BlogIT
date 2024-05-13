import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom'
import { SignupInput } from '@sparta1/blogit-common'
export const Auth = ({type}:{type: "signup" | "signin"}) =>{
    const [getInputs,setGetInputs] = useState<SignupInput>({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    return <div className="h-screen flex justify-center flex-col">
                <div className="flex justify-center">
                    <div>
                       <div className="text-3xl font-bold px-10">
                           {type==="signin"?"Login into Account":"Create an Account"}
                       </div>
                       <div className=" text-neutral-500 font-semibold px-10">
                           {type==="signin"? "Don't have an Account?":"Already have an account?"}
                           <Link to={type==="signin"?'/signup':'/signin'} className='pl-2 underline'>{type==='signin'?'Sign Up':"Login"}</Link>
                       </div>
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

                           <button type="button" className="w-full mt-5 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type==="signup"?"Sign Up":"Sign In"}</button>
                        </div>
                    </div>
                </div>    
            </div>
}

interface InputFieldsTypes{
    label: string;
    placeholder: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function InputFields({label,placeholder,onChange,type}:InputFieldsTypes){
    return <div>
           <label className="block mb-2 text-md font-bold text-gray-900 pt-4">{label}</label>
           <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
    </div>
}