import { Link } from "react-router-dom";

interface PostCardInputs{
    id: string;
    authorFirstName: string;
    authorLastName: string;
    title: string;
    writeup: string;
    publishedDate: string
}


export const PostCard = ({authorFirstName,authorLastName,title,writeup,publishedDate,id}:PostCardInputs) =>{
    return <Link to={`/blog/${id}`}>
    <div className="border-b border-slate-200 pb-4 cursor-pointer">
        <div className="flex">
            <div className="flex justify-center flex-col">
               <Avatar firstName={authorFirstName} lastName={authorLastName}></Avatar>
            </div>
            <div className="flex justify-center flex-col font-normal text-sm pl-2">
               {authorFirstName} {authorLastName}
            </div>
            <div className="flex justify-center flex-col pl-2">
                <Circle/>
            </div>
            <div className="flex justify-center flex-col font-sm text-xs pl-2 text-slate-500 "> {/**pt-1 might require changing */}
               {publishedDate}
            </div>
        </div>
        <div className="text-xl font-bold pt-1">
            {title}
        </div>
        <div className="font-normal text-slate-700 pt-1">
            {writeup.length>100?writeup.slice(0,200)+"...":writeup}
        </div>
        <div className="font-normal text-sm text-slate-500 pt-6">
            {`${Math.ceil(writeup.length/100)} min read`}
        </div>

    </div>
    </Link>
}

export function Avatar({firstName,lastName,size="small"}:{firstName: string; lastName: string; size?:"small" | "big"}){
    return <div>
              <div className={`relative inline-flex items-center justify-center ${size === "small"?"w-6 h-6":"w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
                   <span className={`${size==="small"?"text-xs":"text-md"} text-gray-600 dark:text-gray-300`}>{firstName[0]}{lastName[0]}</span>
              </div>
    </div>
}

function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-600">

    </div>
}