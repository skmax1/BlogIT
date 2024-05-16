import { Posts } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./PostCard"


export const DetailedPost = ({post}:{post:Posts}) =>{
    return <div>
        <Appbar/>
    <div className="grid grid-cols-12 w-full pt-10 px-10">
        <div className="col-span-8">
            <div className="text-5xl font-bold">
                {post.title}
            </div>
            <div className="text-slate-500 pt-4 font-semibold">
                Posted on 16 May, 2024
            </div>
            <div className="pt-5">
            {post.writeup}
            </div>
        </div>
        <div className="col-span-4 pl-10">
            <div className="font-medium">
              Authour
            </div>
                <div className="flex space-between pt-3">
                    <Avatar firstName={post.authour.firstName||"Anonymous"} lastName={post.authour.lastName||"User"} size="big"/>
                    <div className="text-2xl font-bold pl-4">
                          {post.authour.firstName ||"Anonymous"} {post.authour.lastName ||"User"}
                    </div>
                </div>
        </div>
    </div>
</div>
}