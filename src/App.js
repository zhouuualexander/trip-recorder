import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout/Layout';
import Recorder from './containers/Recorder/Recorder';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

class App extends Component {

  render() {
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    return (
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Layout>
            <Recorder />
          </Layout>
          <footer>

          </footer>
        </ThemeProvider>

      </React.Fragment>
    );
  }
}

export default App;