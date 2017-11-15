import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'material-ui/Checkbox'
import Chip from 'material-ui/Chip';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import EduRecord from './EduRecord';

import $ from 'jquery'

/**
 * description
 *
 */
export default class EduRecords extends React.Component {

    state = {
        childs: [{
            name: "Child1",
            period: "Child2",
            location: "Child3",
            grade: 0.00
        }]
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

    setChilds = (childs) => {
        this.state.childs = childs;
        debugger
        this.forceUpdate();
        if (this.state.childs.length > 0)
            this.showChild(0);
    }

    showChild = (idx) => {
        debugger;
        if (idx > this.state.childs.length) {
            this.indicator.status = "read"
            this.indicator.forceUpdate();
        }
        else {
            $(ReactDOM.findDOMNode(this.childComps[idx])).slideDown(500, () => {
                this.showChild(idx + 1);
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.childs.map((item)=>{
                            <EduRecord 
                                ref={
                                    (e)=>{
                                        debugger
                                        this.childComps.push(e);
                                    }
                                }
                                name={item.name}
                                period={item.period}
                                location={item.period}
                                grade={item.grade}
                                // style={{
                                //     display : 'none'
                                // }}
                            />
                        })
                    }
                </div>
                
                <div>
                <RefreshIndicator
                    onClick={(e)=>{
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
                    ref={(e)=>{
                        this.indicator = e;
                    }}
                    size={30}
                    left={0}
                    top={0}
                    status="loading"
                    style={{
                            display: 'inline-block',
                            position: 'relative',
                          }}/>
                    <p ref={
                        (e)=>{
                            this.indicator_desc = e;
                        }
                    }> "학력사항을 불러오는 중입니다." </p>
                </div>
            </div>
        );
    }
}