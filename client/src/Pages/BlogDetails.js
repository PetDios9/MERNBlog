import React from 'react'
import { useParams } from 'react-router'
import getData from '../utils/useGetData'
import { Grid, Typography, Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { useHistory } from "react-router"

export default function BlogDetails() {
    const {id} = useParams()

    let blog = []
    blog = getData(`http://localhost:8000/blogs/${id}`)

    const history = useHistory()

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        })
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
                    {blog.date}
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
