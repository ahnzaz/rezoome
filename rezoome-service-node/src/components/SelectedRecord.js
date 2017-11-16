import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip'

/**
 * Component for Selected records to export. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 */
export default class SelectedRecord extends React.Component {

    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div className='selected_record'>
                <div className='selected_record_type'>
                    <Chip style={{
                        margin : '4px'
                    }}>
                    {this.props.type}
                    </Chip>
                </div>
                <div className='selected_record_name'>
                    <h1>
                        {this.props.name}
                    </h1>
                </div>
            </div>
        );
    }
}