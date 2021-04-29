import { Typography, Grid, TextField, Button, makeStyles } from '@material-ui/core'
import {React, useState} from 'react'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => {
    return {
        link: {
            textDecoration: 'none',
        },
        passwordField: {
            password: true
        }
    }
})

export default function LoginPage() {
    const [usernameField, setUsernameField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const classes= useStyles()

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
                        <TextField 
                            label="Username" 
                            color="secondary" 
                            value={usernameField} 
                            onChange={event => setUsernameField(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label="Password" 
                            color="secondary" 
                            type="password"
                            value={passwordField} 
                            onChange={event => setPasswordField(event.target.value)}
                        />
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
                        <Link to="/register" className={classes.link}>
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