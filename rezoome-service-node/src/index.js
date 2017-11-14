import React from 'react';
import ReactDOM from 'react-dom';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import SignForm from './components/SignForm';
import MetaProfile from './components/MetaProfile';
import RecordEntry from './components/RecordEntry';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AddRecordDialog from './components/AddRecordDialog';

ReactDOM.render(
  <MuiThemeProvider>
    <AppBar
      title="Rezoome"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </MuiThemeProvider>,
  document.getElementById('header')
);

// ReactDOM.render(
//     <MuiThemeProvider>
//         <Paper zDepth={3}>
//         </Paper>
//     </MuiThemeProvider>,
//     document.getElementById('root')
// );


ReactDOM.render(
  <MuiThemeProvider>
    <SignForm />
  </MuiThemeProvider>,
  document.getElementById('sign_form')
);

ReactDOM.render(
    <MuiThemeProvider>
        <Paper
            zDepth={2}>
            <RecordEntry name="XX Collage" desc="YY Campus"/>
            <RecordEntry name="AA Collage" desc="BB Campus"/>
        </Paper>
    </MuiThemeProvider>,
    document.getElementById('record_education')
);

ReactDOM.render(
    <MuiThemeProvider>
        <Paper
            zDepth={2}>
            <RecordEntry name="EJ Company" desc="Boss"/>
            <RecordEntry name="XX Org." desc="Client"/>
        </Paper>
    </MuiThemeProvider>,
    document.getElementById('record_careers')
);

ReactDOM.render(
    <MuiThemeProvider>
        <Paper
            zDepth={2}>
            <RecordEntry name="OPIc" desc="AL"/>
            <RecordEntry name="SW Cert" desc="Expert"/>
        </Paper>
    </MuiThemeProvider>,
    document.getElementById('record_certs')
);
ReactDOM.render(
    <MuiThemeProvider>
        <AddRecordDialog />
    </MuiThemeProvider>,
    document.getElementById("records_add_entry")
);

ReactDOM.render(
    <MuiThemeProvider>
        <MetaProfile name="한동근" simple_profile="Hi! 동근!" img="https://www.w3schools.com/w3css/img_avatar2.png"
            />
    </MuiThemeProvider>,
    document.getElementById('meta')
);