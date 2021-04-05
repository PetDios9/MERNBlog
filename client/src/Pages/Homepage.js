import { Grid, } from '@material-ui/core'
import React, {useState} from 'react'
import BlogCards from '../components/BlogCards'
import Header from '../components/Header'

export default function Homepage() {

    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Learning how to code",
            snippet: "This is my journey of learning how to code",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in bibendum nunc. Vivamus tincidunt turpis neque, at vehicula est volutpat vel. Proin enim libero, dictum sit amet maximus at, accumsan at odio. Nam pharetra justo a mauris sollicitudin finibus. Ut feugiat est sed gravida rutrum. In hac habitasse platea dictumst. Nunc feugiat mi eu purus facilisis, sed molestie est finibus. Duis varius dui lorem, non porta quam porta in. Vivamus vitae pulvinar dolor, eu porta metus."
        },
        {
            id: 2,
            title: 'Learning film photography',
            snippet: 'This is my journey on how I learned to do film photography',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in bibendum nunc. Vivamus tincidunt turpis neque, at vehicula est volutpat vel. Proin enim libero, dictum sit amet maximus at, accumsan at odio. Nam pharetra justo a mauris sollicitudin finibus. Ut feugiat est sed gravida rutrum. In hac habitasse platea dictumst. Nunc feugiat mi eu purus facilisis, sed molestie est finibus. Duis varius dui lorem, non porta quam porta in. Vivamus vitae pulvinar dolor, eu porta metus.'
        }
    ])

    const displayedBlogs = blogs.map(blog => 
        <Grid item xs={3}>
            <BlogCards title={blog.title} snippet={blog.snippet} />
        </Grid>
    )

    return (
        <div>
            <Header />
            <Grid container spacing={3}>
                <Grid item xs={12} style={{textAlign: 'center'}}>
                <img alt="Dark cityscape of unknown asian city" src="https://images.unsplash.com/photo-1616866236720-7a45771084ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80" width="99%"/>
                </Grid>
                {displayedBlogs}
            </Grid>
        </div>
    )
}
