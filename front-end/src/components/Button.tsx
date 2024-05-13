import { MouseEvent } from "react";
interface ButtonType {
    label: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonComponent = ({label,onClick}: ButtonType) =>{

    return <div>
               <button onClick={onClick} type="button" className="w-full mt-5 text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{label}</button>
    </div>

}