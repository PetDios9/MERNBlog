import { Card, CardContent, CardHeader, Link, Typography } from '@material-ui/core'
import React from 'react'

export default function BlogCards(props) {
    return (
        <div>
            <Link href='#' onClick={(event) => event.preventDefault}>
            <Card elevation={6} color="primary">
                <CardHeader 
                    title={props.title}
                />

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
