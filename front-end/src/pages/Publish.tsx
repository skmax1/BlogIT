import axios from "axios"
import { Appbar } from "../components/Appbar"
import { useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () =>{
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const navigate = useNavigate();


return <div>
    <Appbar/>
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded-lg">
      <h2 className="font-bold mb-4 text-3xl">Publish your Blog</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className=" text-xl font-semibold w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-800"
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
      </div>
      <div className="mb-4">
        <textarea
          rows={10}
          placeholder="Write a blog"
          className="w-full border rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-800"
          onChange={(e)=>{
            setContent(e.target.value)
          }}
        ></textarea>
      </div>
      <button
        className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium text-sm"
        onClick={async ()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/post`,{
                title,
                writeup: content
            },{
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            });
            navigate(`/blog/${response.data.postId}`)
        }}
      >
        Publish
      </button>
    </div>
    </div>
}
