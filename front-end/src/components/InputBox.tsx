import { ChangeEvent } from "react";

interface InputFieldsTypes{
    label: string;
    placeholder: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

export function InputFields({label,placeholder,onChange,type}:InputFieldsTypes){
    return <div>
           <label className="block mb-2 text-md font-bold text-gray-900 pt-4">{label}</label>
           <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full" placeholder={placeholder} required />
    </div>
}