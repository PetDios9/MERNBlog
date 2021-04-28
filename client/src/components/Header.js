import {Link} from 'react-router-dom'
import {AppBar, makeStyles, Toolbar, Typography} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles(theme => {
    return {
        toolbar: theme.mixins.toolbar,
        welcome: {
            flexGrow: 5
        },
        links: {
            textDecoration: 'none',
            color: '#FFFFFF', 
            paddingLeft: "2%"
        }
    }
})

export default function Header() {
    const classes = useStyles()
    return (
        <div className={classes.toolbar}>
            <AppBar color="primary" position='fixed'>
                <Toolbar>
                    <Typography variant="h6" className={classes.welcome}>
                        Peter's Blog
                    </Typography>
                    <Link to="/" className={classes.links}>
                        <HomeIcon />
                    </Link> 
                    <Link to="/create" className={classes.links}>
                        <PostAddIcon />
                    </Link>
                    <Link to='/login' className={classes.links}>
                        Login/Register
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}
