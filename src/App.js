import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout/Layout';
import Recorder from './containers/Recorder/Recorder';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter } from 'react-router-dom';

class App extends Component {

  render() {
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    return (
      <HashRouter>
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
      </HashRouter>

    );
  }
}

export default App;