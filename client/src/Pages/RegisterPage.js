import { Button, Grid, TextField, Typography } from '@material-ui/core'
import {React, useState} from 'react'

export default function RegisterPage(){
    return(
        <div>
            <form autoComplete="off" noValidate >
                <Grid 
                    container
                    spacing={3}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            Sign-up Here to Start Posting!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField color="secondary" label="Username" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField color="secondary" label="Email" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField color="secondary" label="Password" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField color="secondary" label="Re-Enter Password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary">
                            Register!
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}