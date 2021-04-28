import { Button, Grid, TextField, Typography, makeStyles } from '@material-ui/core'
import {React, useState} from 'react'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => {
    return {
        link: {
            textDecoration: 'none',
        }
    }
})

export default function RegisterPage(){

    const [usernameField, setUsernameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [confirmPasswordField, setConfirmPasswordField] = useState('')

    const classes = useStyles()

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
                        <TextField 
                            color="secondary" 
                            label="Username" 
                            value={usernameField}
                            onChange={event => setUsernameField(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            color="secondary" 
                            label="Email" 
                            value={emailField}
                            onChange={event => setEmailField(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            color="secondary" 
                            label="Password" 
                            value={passwordField}
                            onChange={event => setPasswordField(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            color="secondary" 
                            label="Confirm Password" 
                            value={confirmPasswordField}
                            onChange={event => setConfirmPasswordField(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary">
                            Register!
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Already a user? Click here to login!
                        </Typography>
                    </Grid>
                    <Link to="/login" className={classes.link}>
                        <Button variant="contained" color="secondary">
                            Login!
                        </Button>
                    </Link>
                </Grid>
            </form>
        </div>
    )
}