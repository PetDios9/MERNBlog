import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router'
import getData from '../utils/useGetData'

export default function BlogDetails() {
    const {id} = useParams()
    let blog = []
    blog = getData(`http://localhost:8000/blogs/${id}`)

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
