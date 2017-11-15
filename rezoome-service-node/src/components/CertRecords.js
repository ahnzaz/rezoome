import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from 'material-ui/Checkbox'
import Chip from 'material-ui/Chip';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import CertRecord from './CertRecord';

import $ from 'jquery'

/**
 * Certs record container component. <br />
 * 
 * @since 1.0.0
 */
export default class CertRecords extends React.Component {

    static entryStyle = {
        display: 'none'
    }

    state = {
        childs: [],
        indicator: 'loading',
        indicator_state: 'Import Certificate records from Blockchain'
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
                easing: 'swing',
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
            <div>
                <div>
                    {
                        this.state.childs.map((item, key)=>{
                            return <CertRecord 
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
                                    display : 'none'
                                }}
                            />
                        })
                    }
                </div>
                
                <div>
                <RefreshIndicator
                    onClick={(e)=>{
                        this.setState({
                            indicator : 'loading'
                        })
                        this.setChilds([
                            {
                                type : '영어 | OPIc',
                                grade : 'AL',
                                date : '2017. 06. 05'
                            },
                            {
                                type : '영어 | TOEIC',
                                grade : '960',
                                date : '2016. 11. 24'
                            }
                        ]);
                    }}
                    size={30}
                    left={0}
                    top={0}
                    percentage={80}
                    status={this.state.indicator}
                    style={{
                            display: 'inline-block',
                            position: 'relative',
                          }}/>
                    <p> {this.state.indicator_state} </p>
                </div>
            </div>
        );
    }
}