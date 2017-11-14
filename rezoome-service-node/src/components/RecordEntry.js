import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import Chip from 'material-ui/Chip'

/**
 * description
 *
 */
class RecordEntry extends React.Component {
    
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
            <div className="record_entry">
                <div className="record_check">
                    <Checkbox 
                        // checked={this.state.checked}
                        // onCheck={this.toggleCheck.bind(this)}
                    />
                </div>
                <div className="record_content">
                    <h1 className="record_name">{this.props.name} </h1>
                    <h2 className="record_desc">{this.props.desc} </h2>
                </div>
                <div className="record_chip">
                    <Chip
                    >
                      Chip 1
                    </Chip>
                    
                    <Chip
                    >
                      Chip 2
                    </Chip>
                </div>
            </div>
        );
    }
}

export default RecordEntry