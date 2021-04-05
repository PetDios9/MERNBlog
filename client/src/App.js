import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue, grey, } from '@material-ui/core/colors';
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
      <div>
        <Homepage />
      </div>
    </ThemeProvider>
  );
}

export default App;
