import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignForm from './components/SignForm';

import AppBar from 'material-ui/AppBar';

const MyAppBar = () => (
  <MuiThemeProvider>
    <AppBar
      title="Rezoome"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </MuiThemeProvider>
);

const MSignForm = () => (
  <MuiThemeProvider>
    <SignForm />
  </MuiThemeProvider>
);

ReactDOM.render(
  <MyAppBar />,
  document.getElementById('header')
);

ReactDOM.render(
  <MSignForm />,
  document.getElementById('sign_form')
);
