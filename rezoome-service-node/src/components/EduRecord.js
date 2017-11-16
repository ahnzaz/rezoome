import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import Chip from 'material-ui/Chip'
import Divider from 'material-ui/Divider';

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
                        margin : '20px'
                    }}>
                    <Checkbox 
                        // checked={this.state.checked}
                        // onCheck={this.toggleCheck.bind(this)}
                    />
                </div>
                <div className="record_content" >
                    <h1 className="record"
                        style={{
                            float : 'left'
                        }}>{this.props.name} </h1>
                    <h2 className="record"
                        style={{
                            float : 'left'
                        }}>{this.props.period} </h2>
                    <h3 className="record"
                        style={{
                            clear : 'left'
                        }}>{this.props.addr} </h3>
                    <h3 className="record">{this.props.grade} </h3>
                </div>
                
                <div className="record_chip" >
                    <Chip
                        className="chip" >
                      Button 02
                    </Chip>
                </div>
                
                <div className="record_chip" >
                    <Chip
                        className="chip" >
                      Button 01
                    </Chip>
                </div>
                
                <div style={{
                    clear : 'both'
                }}>
                    <Divider />
                </div>
            </div>
        );
    }
}

export default EduRecord