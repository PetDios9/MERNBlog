import { Typography, Grid, TextField, Button } from '@material-ui/core'
import {React, useState} from 'react'

export default function LoginPage() {
    const [usernameField, setUsernameField] = useState('')
    const [passwordFiled, setPasswordField] = useState('')

    return(
        <div>
            <Grid 
                container 
                spacing={3}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item xs="12">
                    <Typography variant="h4">
                        Login
                    </Typography>
                </Grid>
                <Grid item xs='12'>
                    <TextField label="Username" color="secondary" />
                </Grid>
                <Grid item xs='12'>
                    <TextField label="Password" color="secondary" />
                </Grid>
                <Grid item xs='12'>
                    <Button color="secondary" variant="contained">
                        Sign On
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}