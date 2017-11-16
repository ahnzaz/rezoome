import React from 'react'

import {
    Step,
    Stepper,
    StepLabel,
}
from 'material-ui/Stepper'

import EduRecords from './EduRecords';
import CertRecords from './CertRecords';
import SelectedRecord from './SelectedRecord';
import ExportRecords from './ExportRecords';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Snackbar from 'material-ui/Snackbar';

/**
 * Container for all components to create and export Report. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 */
export default class CreateReport extends React.Component {
    state = {
        activeStep: 0
    }

    constructor(props) {
        super();
        this.props = props;
    }
    
    snackbar = null;

    getStepContent = (idx) => {
        switch (idx) {
            case 0:
                {
                    return (
                        <div>
                            <EduRecords snackbar={this.snackbar}/>
                            <CertRecords />
                        </div>
                    );

                }

            case 1:
                {
                    return (
                        <div>
                            <div style={{
                                padding : '20px'
                            }}>
                                <p className='big'> 리포트 생성이 완료되었습니다.</p>
                                <p className='big'> 아래의 버튼을 클릭하여 원하는 방식으로 사용해 주세요. </p>
                            </div>
                            <div>
                                {
                                    [{
                                        type: '학력',
                                        name: '한국과학고등학교 졸업증명서'
                                    },
                                    {
                                        type: '학력',
                                        name: '한국대학교 전자공학과 졸업증명서'
                                    },
                                    {
                                        type: '외국어능력',
                                        name: '영어 OPIC 성적 증명서'
                                    }
                                    ].map((item) => {
                                        return (<SelectedRecord
                                                    type={item.type}
                                                    name={item.name} />
                                            );
                                    })
                                }
                            </div>
                            <div>
                            <ExportRecords />
                            </div>
                        </div>
                    );
                }

            default:
                return;
        }
    }

    render() {
        return (
            <div style={this.props.style}>
                <div id="create_report_stepper">
                    <Stepper
                        activeStep={this.state.activeStep}>
                        <Step>
                            <StepLabel>Select records to export</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Export to PDF or URL</StepLabel>
                        </Step>
                    </Stepper>
                </div>
                <div id='create_report_contents'>
                {
                    this.getStepContent(this.state.activeStep)
                }
                </div>
                <div id='create_report_navigator'>
                    <RaisedButton
                        label='Next'
                        onClick={()=>{
                                    this.setState({
                                        activeStep : this.state.activeStep+1
                                    })
                    }} />
                </div>
            </div>
        );
    }
}