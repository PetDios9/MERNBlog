import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'

export default function CreateBlog() {
    return (
        <div>
            <form>
                <Grid container direction="column" spacing={3}>
                    <Grid item xs={12}>
                        <TextField variant="outlined" label="Title" id="title-text" color="secondary" fullWidth={true} autoComplete="off" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" label="Snippet" id="snippet-text" color="secondary" fullWidth={true} autoComplete="off" />
                    </Grid>    
                    <Grid item xs={12}>
                        <TextField variant="outlined" label="Body" id="body-text" color="secondary" multiline={true} rows={7} fullWidth={true} autoComplete="off"/>
                    </Grid>
                    <Grid item >
                        <Grid container direction="row-reverse">
                            <Grid item>
                                <Button color="primary" variant="contained">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
