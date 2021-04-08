import { Grid, } from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import BlogCard from '../components/BlogCard'

export default function Homepage() {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])
    
    const renderedBlogs = blogs.map(blog => 
        <Grid item xs={3} key={blog.id}>
            <BlogCard id={blog.id} snippet={blog.snippet} title={blog.title} />
        </Grid>
    )
    return (
        <div>    
            <Grid container spacing={3}>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                <img alt="Dark cityscape of unknown city" src="https://images.unsplash.com/photo-1616866236720-7a45771084ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80" width="100%"/>
                </Grid>
                {renderedBlogs}
            </Grid>
        </div>
    )
}
