import { Link } from "react-router-dom"
import { Avatar } from "./PostCard"

export const Appbar = () => {
    return <div className="border-b flex justify-between px-10 pt-5 py-4">
        <Link to={'/blogs'}>
        <div className="flex justify-center flex-col font-bold text-2xl cursor-pointer">
            BlogIT
        </div>
        </Link>
        <div className="flex justify-between">
            <Link to={'/publish'} className="pr-10">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create</button> 
            </Link>
            <Avatar firstName="Keshav" lastName="Mani" size={"big"}/>
        </div>

    </div>
}