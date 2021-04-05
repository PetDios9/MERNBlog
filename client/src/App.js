import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue, grey, } from '@material-ui/core/colors';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import CreateBlog from './Pages/CreateBlog';
import Homepage from './Pages/Homepage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900]
    },
    secondary: blue
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch> 
        </div>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
