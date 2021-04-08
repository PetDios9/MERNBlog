import { Card, CardContent, CardHeader, makeStyles, Typography, } from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => {
    return{
        link: {
            textDecoration: 'none'
        },
        card: {
            borderColor: "#960253",
            borderWidth: "7px 0px 0px 7px",
            borderRadius: '2'
        }
    }
})

export default function BlogCard({title, snippet, id}) {
    const classes = useStyles()
    return(
    <div>
        <Link to={`/blogs/${id}`} className={classes.link}>
            <Card variant="outlined" className={classes.card}>
                <CardHeader 
                    title={title}
                    subheader="May 1st, 2021"
                />
                <CardContent>
                    <Typography variant="body2">
                        {snippet}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    </div>
    )}
