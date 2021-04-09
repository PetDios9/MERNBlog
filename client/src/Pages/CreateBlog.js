import { Button, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import date from 'date-and-time'
import { useHistory } from 'react-router'

export default function CreateBlog() {

    const [title, setTitle] = useState('')
    const [snippet, setSnippet] = useState('')
    const [body, setBody] = useState('')
    const [titleErr, setTitleErr] = useState(false)
    const [snippetErr, setSnippetErr] = useState(false)
    const [bodyErr, setBodyErr] = useState(false)
    const history= useHistory()

    const validate = () => {
        setTitleErr(false)
        setSnippetErr(false)
        setBodyErr(false)

        if (title === '') {
            setTitleErr(true)
        }

        if (snippet === '') {
            setSnippetErr(true)
        }

        if (body === '') {
            setBodyErr(true)
        }
    }

    const clearFields = () => {
        setTitle('')
        setSnippet('')
        setBody('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        validate()

        if (title && snippet && body) {
            const now = new Date()
            
            fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    date: date.format(now,'MMMM DD YYYY'),
                    title,
                    snippet,
                    body
                })
            }).then(history.push('/'))

            clearFields()
        }
    }

    return (
        <div>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={3}>
                    <Grid item xs={12}>
                        <TextField 
                            required
                            error={titleErr}
                            variant="outlined" 
                            label="Title" 
                            id="title-text" 
                            color="secondary" 
                            fullWidth={true} 
                            value={title}
                            onChange={event => setTitle(event.target.value)} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            required
                            error={snippetErr}
                            variant="outlined" 
                            label="Snippet" 
                            id="snippet-text" 
                            color="secondary" 
                            fullWidth={true} 
                            value={snippet}
                            onChange={event => setSnippet(event.target.value)} 
                        />
                    </Grid>    
                    <Grid item xs={12}>
                        <TextField 
                            required
                            error={bodyErr}
                            variant="outlined" 
                            label="Body" 
                            id="body-text" 
                            color="secondary" 
                            multiline={true} 
                            rows={7} 
                            fullWidth={true} 
                            value={body}
                            onChange={event => setBody(event.target.value)}
                        />
                    </Grid>
                    <Grid item >
                        <Grid container direction="row-reverse">
                            <Grid item>
                                <Button 
                                    color="primary" 
                                    variant="contained" 
                                    type="submit"
                                >
                                    Post
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
