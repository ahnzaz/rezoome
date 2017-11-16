import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'material-ui/Checkbox'
import Chip from 'material-ui/Chip';
import EduRecord from './EduRecord';
import CircularProgress from 'material-ui/CircularProgress'

import $ from 'jquery'
import jQuery from 'jquery-easing';

import Divider from 'material-ui/Divider'

/**
 * description
 *
 */
export default class EduRecords extends React.Component {

    static entryStyle = {
        display: 'none'
    }

    state = {
        childs: [],
        indicator: 'loading',
        indicator_state: 'Import education records from Blockchain'
    }

    // 진짜 Child components
    childComps = [];

    addChild = (options) => {
        this.forceUpdate();
    };


    constructor(props) {
        super();
        this.props = props;
    }

    setChilds = (_childs) => {
        this.state.childs = _childs;
        this.forceUpdate(() => {
            if (this.state.childs.length > 0)
                this.showChild(0);
        });

    }

    showChild = (idx) => {
        if (idx < this.state.childs.length) {
            $(ReactDOM.findDOMNode(this.childComps[idx])).slideDown({
                easing: 'easeOutExpo',
                duration: 1000,
                complete: () => {
                    setTimeout(()=>{
                        this.showChild(idx + 1);    
                    },500)
                }
            })
        }
        else {
            this.setState({
                indicator: 'ready',
                indicator_state: 'Import complete'
            })
        }
    }

    render() {
        return (
            <div
                style={{
                    padding :'20px',
                    width : 950
                }}
                >
                <div>
                    <p> - 학력 사항 </p>
                </div>
                <div>
                    <Divider />
                </div>
                <div>
                    {
                        this.state.childs.map((item, key)=>{
                            return (<EduRecord 
                                id={key}
                                key={key}
                                ref={
                                    (e)=>{
                                        this.childComps.push(e);
                                    }
                                }
                                name={item.name}
                                period={item.period}
                                location={item.period}
                                grade={item.grade}
                                style={{
                                    display : 'none',
                                    heigth : '104px'
                                }} />
                            )
                        })
                    }
                </div>
                
                <div>
                <CircularProgress
                    className='cicularProgress'
                    onClick={(e)=>{
                        this.setState({
                            indicator : 'loading'
                        })
                        this.setChilds([
                            {
                                name : "한국 과학고등학교",
                                period : "2012.03 - 2014.02",
                                location : "대한민국 서울 특별시",
                                grade : 0.00
                            },
                            {
                                name : "한국대학교 전자공학과",
                                period : "2014.03 - 2018.09",
                                location : "대한민국 서울 특별시",
                                grade : "3.8/4.5"
                            }
                        ]);
                    }}
                    size={15}
                    percentage={80}
                    style={{
                            display: 'inline-block',
                            position: 'relative',
                            margin : '10px'
                          }}/>
                    <p> {this.state.indicator_state} </p>
                </div>
            </div>
        );
    }
}