import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Component for Selected records to export. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 */
export default SelectedRecord extends React.Component {
    state = {

    }

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div>
                <div className='selected_record_type'>
                    <p className='selected_record_type'>
                        {this.props.type}
                    </p>
                </div>
                <div className='selected_record_name'>
                    <p className='selected_record_name'>
                        {this.props.name}
                    </p>
                </div>
            </div>
        );
    }
}