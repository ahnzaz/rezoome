import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import Chip from 'material-ui/Chip'

/**
 * description
 *
 */
class EduRecord extends React.Component {
    
    // state = {
    //     checked: false
    // }

    constructor(props) {
        super();
        this.props = props;
    }

    // toggleCheck() {
    //     this.setState((oldState) => {
    //         return {
    //             checked: !oldState.checked,
    //         };
    //     });
    // }

    render() {
        return (
            <div className="record_entry record_edu"
                style={this.props.style}>
                <div className="record_check record_edu"
                    style={{
                        float : 'left'
                    }}>
                    <Checkbox 
                        // checked={this.state.checked}
                        // onCheck={this.toggleCheck.bind(this)}
                    />
                </div>
                <div className="record_edu_content"
                    style={{
                        float : 'left'
                    }}>
                    <h1 className="record_edu_name"
                        style={{
                            float : 'left'
                        }}>{this.props.name} </h1>
                    <h2 className="record_edu_period"
                        style={{
                            float : 'left'
                        }}>{this.props.period} </h2>
                    <h3 className="record_edu_addr"
                        style={{
                            clear : 'left'
                        }}>{this.props.addr} </h3>
                    <h4 className="record_edu_grade">{this.props.grade} </h4>
                </div>
                <div className="record_chip"
                        style={{
                            float : 'right'
                        }}>
                    <Chip
                        className="chip1"
                        style={{
                            float : 'right'
                        }}>
                      Button 01
                    </Chip>
                    
                    <Chip
                        className="chip2"
                        style={{
                            float : 'right'
                        }}>
                      Button 02
                    </Chip>
                </div>
            </div>
        );
    }
}

export default EduRecord