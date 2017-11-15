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

    getStepContent = (idx) => {
        switch (idx) {
            case 0:
                {
                    return (
                        <div>
                            <div><p>- 학력사항</p></div>
                            <div>
                                <EduRecords />
                            </div>
                            <div><p>- 외국어 능력</p></div>
                                <CertRecords />
                            <div></div>
                        </div>
                    );

                }

            case 1:
                {
                    return (
                        <div>
                            <div>
                                <p> Creation reports is complete. Choose format to export. </p>
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
                <div id='create_report_container'>
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