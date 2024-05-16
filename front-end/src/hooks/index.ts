import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Posts{
    Id:string;
    title: string;
    writeup: string;
    authourId: string;
    authour:{
        firstName: string;
        lastName: string;
    }
}

export const usePost = ({id}:{id:string}) =>{
    const [loading,setLoading] = useState(true);
    const [post,setPost] =  useState<Posts[]>([])
    useEffect(()=>{

        axios.get(`${BACKEND_URL}/api/v1/post/${id}`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
             .then(response=>{
                setPost(response.data.getPost);
                setLoading(false);
             })

    },[id])
    
    return {
        loading,post
    }
    
}


export const usePosts = () => {
    const [loading,setLoading] = useState(true);
    const [posts,setPosts] = useState<Posts[]>([]);

    useEffect(()=>{
      axios.get(`${BACKEND_URL}/api/v1/post/bulk`,{
        headers:{
            Authorization: localStorage.getItem("token")
        }
      })
             .then((response)=>{
                setPosts(response.data.bulk);
                setLoading(false);
             })
    },[])
    return {
        loading,posts
    }
}