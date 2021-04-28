import { Typography, Grid, TextField, Button } from '@material-ui/core'
import {React, useState} from 'react'
import {Link} from 'react-router-dom'

export default function LoginPage() {
    const [usernameField, setUsernameField] = useState('')
    const [passwordFiled, setPasswordField] = useState('')

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
                            Login!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Username" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" color="secondary" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="secondary" variant="contained">
                            Sign On
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Not a user yet? Click here to register!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/register">
                            <Button color="secondary" variant="contained">
                                Register!
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}