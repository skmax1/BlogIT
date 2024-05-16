import { DetailedPost } from "../components/DetailedPost";
import { Skeleton } from "../components/Skeleton";
import { usePost } from "../hooks"
import { useParams } from "react-router-dom"

export const Post = () => {
    const {id} = useParams();
    const {loading,post} = usePost({
        id: id||""
    });

    if(loading){
        return <div>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </div>
    }
    return <div>
        <DetailedPost post={post}/>
    </div>

}