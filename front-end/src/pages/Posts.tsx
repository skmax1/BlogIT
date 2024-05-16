import { Appbar } from "../components/Appbar"
import { PostCard } from "../components/PostCard"
import { Skeleton } from "../components/Skeleton";
import { usePosts } from "../hooks"

export const Posts = () => {
    const {loading,posts} = usePosts();


    if(loading){
        return <div>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
        </div>
    }
    return <div>
        <Appbar/>
            <div className="flex justify-center">
              <div className="max-w-xl p-4">
                  {posts.map(post => <PostCard id={post.Id} authorFirstName={post.authour.firstName || 'Anonymous'}
                    authorLastName={post.authour.lastName || 'User'}
                    title={post.title}
                    writeup={post.writeup}
                    publishedDate="14 May, 2024">
                </PostCard>)}
                   
            </div>
         </div>
    </div>

}