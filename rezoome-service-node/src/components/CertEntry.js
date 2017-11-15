import React from 'react';
import Checkbox from 'material-ui/Checkbox'
import Chip from 'material-ui/Chip'

/**
 * Component for Certificate records container. <br />
 * 
 * @since 1.0.0
 *
 */
export default class CertEntry extends React.Component {
    

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
            <div className="record_entry"
                stype={this.props.style}>
                <div className="record_check">
                    <Checkbox 
                        // checked={this.state.checked}
                        // onCheck={this.toggleCheck.bind(this)}
                    />
                </div>
                <div className="record_content">
                    <h1 className="record_cert_type">{this.props.type} </h1>
                    <h2 className="record_cert_grade">{this.props.grade} </h2>
                    <h2 className="record_cert_date">{this.props.date} </h2>
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