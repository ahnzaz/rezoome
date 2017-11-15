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
                <div className="record_check record_edu">
                    <Checkbox 
                        // checked={this.state.checked}
                        // onCheck={this.toggleCheck.bind(this)}
                    />
                </div>
                <div className="record_edu_content">
                    <h1 className="record_edu_name">{this.props.name} </h1>
                    <h2 className="record_edu_period">{this.props.period} </h2>
                    <h3 className="record_edu_addr">{this.props.addr} </h3>
                    <h4 className="record_edu_grade">{this.props.grade} </h4>
                </div>
                <div className="record_chip">
                    <Chip
                        className="chip1">
                      Chip 1
                    </Chip>
                    
                    <Chip
                        className="chip2">
                      Chip 2
                    </Chip>
                </div>
            </div>
        );
    }
}

export default EduRecord