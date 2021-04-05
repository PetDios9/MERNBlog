import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'

export default function BlogCards(props) {
    return (
        <div>
            <Link to="/create" style={{textDecoration: 'none'}}>
            <Card elevation={6} color="primary">
                <CardHeader title={props.title}/>
                <CardContent>
                    <Typography variant="body2">
                        {props.snippet}
                    </Typography>
                </CardContent>
            </Card>
            </Link>
        </div>
    )
}
