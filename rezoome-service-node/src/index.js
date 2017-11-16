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

import CircularProgress from 'material-ui/CircularProgress';


import $ from 'jquery';
import jQuery from 'jquery-easing';

ReactDOM.render(
  <MuiThemeProvider>
    <AppBar
      title="REZOOME"
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

const defaultEasing = 'easeOutExpo';
const defaultDuration = 1000;

const changeToCreate = ()=>{
    $('#intro').fadeOut({
        duration: defaultDuration,
        easing: defaultEasing,
        complete : ()=>{
            setTimeout(()=>{
                $('#create_report_container').fadeIn({
                    duration : defaultDuration,
                    easing : defaultEasing
                });
            }, 500)
        }
    })
}
// ReactDOM.render(
//     <MuiThemeProvider>
//         <MetaProfile
//             name="한동근"
//             simple_profile="Hi! 동근!"
//             img="https://www.w3schools.com/w3css/img_avatar2.png"
//             callback={
//                 changeToCreate
//             }
//             />
//     </MuiThemeProvider>,
//     document.getElementById('meta')
// );

var createContainer = null;

// Timeline loading progress
var timelineLoading = null;
var timeline_img = null;

ReactDOM.render(
    <MuiThemeProvider>
        <Paper
            style={{
                width : 'auto',
                margin : '10px'
            }}
            zDepth={3}>
            <div id='nested'>
                <div style={{
                    padding : 20
                }}>
                    <SignForm
                        callback= {
                            () => {
                                $('#root').animate({
                                    width: '100%',
                                    height: '850px',
                                    margin : 0
                                }, {
                                    duration: defaultDuration,
                                    easing: defaultEasing,
                                })
                        
                                $('#nested').animate({
                                    width: '100%',
                                    height: '850px',
                                }, {
                                    duration: defaultDuration,
                                    easing: defaultEasing,
                                    complete: () => {
                        
                                        $('#header').slideDown({
                                            duration: defaultDuration,
                                            easing: defaultEasing,
                                            complete: () => {
                                                $('#nav').fadeIn({
                                                    duration: 1000,
                                                    easing: defaultEasing
                                                });
                                                $('#contents').fadeIn({
                                                    duration: 1000,
                                                    easing: defaultEasing
                                                });
                                            }
                                        })
                                    }
                                })
                            }
                        }
                        />
                </div>
                <nav id="nav">
                    <MetaProfile
                        name="한동근"
                        simple_profile="Hi! 동근!"
                        img="https://www.w3schools.com/w3css/img_avatar2.png"
                        callback={
                            changeToCreate
                        }
                    />
                </nav>
                <div id='contents'>
                    <div id="intro">
                        <div id="recent">
                            <div id="recent_img">
                                <h1> 한동근's 최근 업데이트 정보 </h1>
                            </div>
                            <div id='recent_list'>
                                <ul>
                                    <li>
                                        2017.09.14 OPIc 성적 업데이트
                                    </li>
                                    <li>
                                        2017.08.14 한국대학교 4학년 1학기 성적 업데이트
                                    </li>
                                </ul>
                            </div>
                        </div>
        
                        <div id="timeline">
                            <div id='timeline_header'
                                style={{
                                    padding : '20px',
                                    textAlign : 'center'
                                }}>
                                <h1> 타임라인 </h1>
                            </div>
                            <div id='timeline_content'
                                style={{
                                padding : '30px',
                                textAlign : 'center'
                            }}>
                                <CircularProgress size={300}
                                    ref={(e)=>timelineLoading = e}
                                    style={{
                                        maring : '0 auto'
                                    }}
                                    onClick={()=>{
                                        $(ReactDOM.findDOMNode(timelineLoading)).fadeOut({
                                            duration : 1000,
                                            easing : defaultEasing,
                                            complete : ()=>{
                                                $(ReactDOM.findDOMNode(timeline_img)).fadeIn({
                                                    duration : 1000,
                                                    easing : defaultEasing
                                                })
                                            }
                                        })
                                    }} />
                                <img ref={(e)=>{
                                    timeline_img = e
                                }}
                                src='./img/'/>
                            </div>
                        </div>
                    </div>
                    <div id="create_report_container">
                        <CreateReport />
                    </div>
                </div>
            </div>
        </Paper>
    </MuiThemeProvider>,
    document.getElementById('root')
);