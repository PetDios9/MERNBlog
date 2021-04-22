import { Grid, Typography, } from '@material-ui/core'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard'

export default function Homepage() {
    const [blogs, setBlogs] = useState([])
    const[loading, setLoading] = useState(false)

    const getBlogs = async () => {
        console.log('called')
        setLoading(true)
        await axios.get('http://localhost:8000/blogs/')
            .then(response => setBlogs(response.data))
            .catch(err => console.log(err))
            setLoading(false)
    }
    useEffect(() => {
        getBlogs()
        return () => {
            setBlogs([])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(blogs)
    const renderedBlogs = blogs.map(blog => 
        <Grid item xs={12} md={3}  key={blog._id}>
            <BlogCard id={blog._id} snippet={blog.snippet} title={blog.title} date={blog.dateCreated}/>
        </Grid>
    )
    return (
        <div>    
            <Grid container spacing={3}>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                <img alt="Dark cityscape of unknown city" src="https://images.unsplash.com/photo-1616866236720-7a45771084ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80" width="100%"/>
                </Grid>
                {loading ? <Typography variant="h2">Loading...</Typography> : renderedBlogs}
                <Grid item xs={12}>
                    {blogs.length === 0 && !loading ? <h1>No Blogs! Press the button at the top right to create a blog!</h1> : null}
                </Grid>
            </Grid>
        </div>
    )
}
