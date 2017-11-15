import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

export default class ExportRecords extends React.Component{
    state = {
        open_pdf: false,
        open_url: false
    }

    constructor(props) {
        super();
        this.props = props;
    }
    
    openPDF = () => {
        this.setState({
            open_pdf : true
        })
    }
    
    closePDF = () => {
        this.setState({
            open_pdf : false
        })
    }
    
    openUrl = () => {
        this.setState({
            open_url : true
        })
    }
    
    closeUrl = () => {
        this.setState({
            open_url : false
        })
    }

    render() {
        return (
            <div>
                <RaisedButton
                label="Export to PDF"
                onClick={this.openPDF} />
                
                <RaisedButton
                label = "Export to URL"
                onClick = {this.openUrl} />
                
                <Dialog title = "Export PDF"
                    modal = { false }
                    open = {this.state.open_pdf}
                    onRequestClose = {this.closePDF} >
                </Dialog>
                
                <Dialog title = "Export URL"
                modal = { false }
                open = {this.state.open_url}
                onRequestClose = {this.closeUrl} >
                </Dialog>
            </div>
        );
    }
}