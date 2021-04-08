import { createMuiTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import { grey, pink, } from '@material-ui/core/colors';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import BlogDetails from './Pages/BlogDetails';
import CreateBlog from './Pages/CreateBlog';
import Homepage from './Pages/Homepage';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[900]
    },
    secondary: {
      main: pink[900]
    }
  }
})

const useStyles = makeStyles(theme => {
  return{
    root: {
      padding: 20
    }
  }
})


function App() {
  const classes = useStyles()
  return (
    <div style={{overflow: 'hidden'}}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}> 
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch> 
        </div>
      </Router>
      </div>
    </ThemeProvider>
   </div> 
  );
}

export default App;
