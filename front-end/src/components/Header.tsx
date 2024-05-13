import { Link } from 'react-router-dom'
interface paramTypes{
    label1: string;
    label2: string;
    label3: string;
    path: string

}

export const Header = ({label1,label2,label3,path}: paramTypes) => {
    return <div>
             <div className="text-3xl font-bold px-10">{label1}</div>
                       <div className=" text-neutral-500 font-semibold px-10">{label2}
                           <Link to={path} className='pl-2 underline'>{label3}</Link>
                       </div>
             </div>
}