import React from 'react'
import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => {
    return {
        toolbar: theme.mixins.toolbar
    }
})

export default function Header() {
    const classes = useStyles()

    return (
        <div className={classes.toolbar}>
            <AppBar color="primary" position='fixed'>
                <Toolbar >
                    <Typography variant="h6">
                        Welcome to Peter's Blog
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
