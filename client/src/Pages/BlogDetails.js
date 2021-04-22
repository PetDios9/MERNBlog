import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import { Grid, Typography, Button, makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { useHistory } from "react-router"
import axios from 'axios'
import DeleteConfirmation from '../components/DeleteConfirmation'

const useStyles = makeStyles(theme => {
    return{
        bodyText: {
            //preserve line breaks in body text
            whiteSpace: 'pre-line',
        },
    }
})

export default function BlogDetails() {
    const classes = useStyles()

    const {id} = useParams()

    const [blog, setBlog] = useState({})
    console.log(blog)
    const [dialogOpen, setDialogOpen] = useState(false)

    const openDialog = () => setDialogOpen(true)
    const closeDialog = () => setDialogOpen(false)


    useEffect(() => {
        axios.get(`http://localhost:8000/blogs/${id}`)
            .then(response=> setBlog(response.data))
            .catch(err=> console.log(err))
    },[id])

    const history = useHistory()

    const handleDelete = async () => {
        await axios.delete(`http://localhost:8000/blogs/${id}`) 
            .then(()=> {history.push('/')}) 
            .catch(err => console.log(err))
    }

    return (
        <Grid container spacing={4} direction='row-reverse'>
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
            <Grid item xs={12}>
                <Typography variant='body1' className={classes.bodyText}>
                    {blog.body}
                </Typography>
            </Grid>
            {/* <Grid container spacing={3} direction="row-reverse"> */}
                <Grid item>
                    <Button 
                        startIcon={<DeleteIcon />} 
                        variant="contained" 
                        color='secondary' 
                        onClick={openDialog}
                    >
                        Delete Post
                    </Button>
                    <DeleteConfirmation open={dialogOpen} onClose={closeDialog} handleDelete={handleDelete}/>
                </Grid>
            {/* </Grid> */}
        </Grid>
    )
}
