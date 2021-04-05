import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => {
    return {
        toolbar: theme.mixins.toolbar,
        welcome: {
            flexGrow: 5
        },
        links: {
            textDecoration: 'none',
            color: '#FFFFFF',
            flexGrow: 0
        }
    }
})

export default function Header() {
    const classes = useStyles()

    return (
        <div className={classes.toolbar}>
            <AppBar color="primary" position='fixed'>
                <Toolbar >
                    <Typography variant="h6" className={classes.welcome}>
                        Welcome to Peter's Blog
                    </Typography>
                    <Link to="/" className={classes.links}>
                        <Typography variant="h6">
                          Home
                        </Typography>  
                    <Link to="/create" className={classes.links}>
                        <Typography variant="h6">
                            Post
                        </Typography>
                    </Link>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}
