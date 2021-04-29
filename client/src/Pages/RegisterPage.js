import { Button, Grid, TextField, Typography, makeStyles } from '@material-ui/core'
import {React, useState} from 'react'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => {
    return {
        link: {
            textDecoration: 'none',
        },
        passwordDoesntMatchText: {
            color: 'red'
        }
    }
})

export default function RegisterPage(){

    const [usernameField, setUsernameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [confirmPasswordField, setConfirmPasswordField] = useState('')
    const [usernameError, setUsernameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const classes = useStyles()

    const validatePasswords = () => {

        setPasswordError(false)
        setConfirmPasswordError(false)

        if (passwordField !== confirmPasswordField) {
            setPasswordError(true)
            setConfirmPasswordError(true)
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        validatePasswords()
    }

    return(
        <div>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
                    {passwordError ? <Grid item xs={12}>
                        <Typography variant="body1" className={classes.passwordDoesntMatchText}>
                            Passwords do not match! Please Re-Enter and try again!
                        </Typography>
                    </Grid>: null}
                    <Grid item xs={12}>
                        <TextField 
                            color="secondary" 
                            label="Username" 
                            value={usernameField}
                            error={usernameError}
                            onChange={event => setUsernameField(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            color="secondary" 
                            label="Email" 
                            value={emailField}
                            error={emailError}
                            onChange={event => setEmailField(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            color="secondary" 
                            label="Password" 
                            type="password"
                            value={passwordField}
                            error={passwordError}
                            onChange={event => setPasswordField(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            color="secondary" 
                            label="Confirm Password" 
                            type="password"
                            value={confirmPasswordField}
                            error={confirmPasswordError}
                            onChange={event => setConfirmPasswordField(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary" type="submit">
                            Register!
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Already a user? Click here to login!
                        </Typography>
                    </Grid>
                    <Link to="/login" className={classes.link}>
                        <Button variant="contained" color="secondary" >
                            Login!
                        </Button>
                    </Link>
                </Grid>
            </form>
        </div>
    )
}