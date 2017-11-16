import React from 'react';
import ReactDOM from 'react-dom';

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import SignForm from './components/SignForm';
import MetaProfile from './components/MetaProfile';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton';
import AddRecordDialog from './components/AddRecordDialog';


import EduRecords from './components/EduRecords';
import CertRecrods from './components/CertRecords';

import ExportRecords from './components/ExportRecords';
import CreateReport from './components/CreateReport';

import $ from 'jquery';

ReactDOM.render(
  <MuiThemeProvider>
    <AppBar
      title="Rezoome"
      iconElementRight={
        <RaisedButton label="Service Guide" />,
        <RaisedButton label="My page" />,
        <RaisedButton label="Log out" />
      }
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

var eduRecordComp = null;

// const loadEdu = ()=>{
//     eduRecordComp.setChilds([
//         {
//             name : "한국 과학고등학교",
//             period : "2012.03 - 2014.02",
//             location : "대한민국 서울 특별시",
//             grade : 0.00
//         },
//         {
//             name : "한국대학교 전자공학과",
//             period : "2014.03 - 2018.09",
//             location : "대한민국 서울 특별시",
//             grade : "3.8/4.5"
//         }
//     ])
// }

// ReactDOM.render(
//     <MuiThemeProvider>
//         <EduRecords ref={
//             (e)=>{
//                 eduRecordComp = e;
//             }
//         }
//         />
//     </MuiThemeProvider>,
//     document.getElementById('record_education')
// );

// ReactDOM.render(
//     <MuiThemeProvider>
//         <CertRecords />
//     </MuiThemeProvider>,
//     document.getElementById('record_certs')
// );

// ReactDOM.render(
//     <MuiThemeProvider>
//         <Paper
//             zDepth={2}>
//             <RecordEntry name="OPIc" desc="AL"/>
//             <RecordEntry name="SW Cert" desc="Expert"/>
//         </Paper>
//     </MuiThemeProvider>,
//     document.getElementById('record_certs')
// );
// ReactDOM.render(
//     <MuiThemeProvider>
//         <AddRecordDialog />
//     </MuiThemeProvider>,
//     document.getElementById("records_add_entry")
// );

const changeToCreate = ()=>{
    $('#intro').slideUp({
        duration: 500,
        easing: 'linear',
        complete : ()=>{
            setTimeout(()=>{
                $(ReactDOM.findDOMNode(createContainer)).slideDown(500);
            }, 500)
        }
    })
}
ReactDOM.render(
    <MuiThemeProvider>
        <MetaProfile
            name="한동근"
            simple_profile="Hi! 동근!"
            img="https://www.w3schools.com/w3css/img_avatar2.png"
            callback={
                changeToCreate
            }
            />
    </MuiThemeProvider>,
    document.getElementById('meta')
);

var createContainer = null;
ReactDOM.render(
    <MuiThemeProvider>
        <CreateReport
            ref={(e)=>{
                createContainer = e}}
            style={{
                    display : 'none'
                }}/>
    </MuiThemeProvider>,
    document.getElementById('create_report_container')
);