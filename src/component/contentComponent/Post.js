import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Post() {

   const [blogs,setBlogs] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {setBlogs(response.data)})
            .catch((error) => {console.log(error)})
        })
    
        return (
            <ul>
                {
                    blogs.map((blog) =>(
                    <li> {blog.title} </li>
                    ))
                }
            </ul> 
    )
}

export default Post;
