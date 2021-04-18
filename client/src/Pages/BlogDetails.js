import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { Grid, Typography, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { useHistory } from "react-router"
import axios from 'axios'

export default function BlogDetails() {
    const {id} = useParams()

    const [blog, setBlog] = useState({})
    console.log(blog)

    useEffect(() => {
        axios.get(`http://localhost:8000/blogs/${id}`)
            .then(response=> setBlog(response.data))
            .catch(err=> console.log(err))
    },[id])
        
    console.log(blog)

    const history = useHistory()

    const handleDelete = async () => {
        await axios.delete(`http://localhost:8000/blogs/${id}`) 
        .then(history.push('/')) 
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant='h3'>
                    {blog.title}
                </Typography> 
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">
                    {blog.dateCreated}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='body1'>
                    {blog.body}
                </Typography>
            </Grid>
            <Grid container direction="row-reverse">
                <Grid item>
                    <Button 
                        startIcon={<DeleteIcon />} 
                        variant="contained" 
                        color='secondary' 
                        onClick={handleDelete}
                    >
                        Delete Post
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
