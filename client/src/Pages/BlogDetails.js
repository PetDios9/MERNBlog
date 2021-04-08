import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../components/useFetch'

export default function BlogDetails() {
    const {id} = useParams()
    console.log(id)
    let blog = []
    blog = useFetch(`http://localhost:8000/blogs/${id}`)

    return (
        <Grid container  spacing={4}>
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
        </Grid>
    )
}
