import { Typography, Grid, TextField, Button, makeStyles } from '@material-ui/core'
import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import axios from 'axios'
import { useHistory } from 'react-router'

const useStyles = makeStyles(theme => {
    return {
        link: {
            textDecoration: 'none',
        },
        errorText: {
            color: 'red'
        }
    }
})

export default function LoginPage() {
    const [errorMessage, setErrorMessage] = useState('')
    const history = useHistory()

    const classes= useStyles()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        //validate,
        onSubmit : async values => {
            const user = values
            axios.post('http://localhost:8000/users/login', user)
                .then(response => history.push('/'))
                .catch(err => setErrorMessage('Incorrect Username or Password'))
        }
    })

    return(
        <div>
            <form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
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
                    {errorMessage ? <Typography className={classes.errorText} variant="subtitle1">{errorMessage}</Typography>: null}
                    <Grid item xs={12}>
                        <TextField 
                            label="Username" 
                            color="secondary" 
                            id="username"
                            value={formik.values.username} 
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label="Password" 
                            color="secondary" 
                            type="password"
                            id="password"
                            value={formik.values.password} 
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button color="secondary" variant="contained" type="submit">
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