import React from 'react';
import ReactDOM from 'react-dom';

import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'

import $ from 'jquery';

const paper_style = {
    width: "100%",
    textAlign: 'center',
    display: 'inline-block',
    padding : 10
}

const input_style = {
    width : '100%',
}


export default class SignForm extends React.Component{
    constructor(props){
        super();
        this.props = props;
    }
    
    render(){
        return(
            <Paper
                style={paper_style}
                zDepth={2} >
                <div>
                    <TextField
                        hintText="id@example.com"
                        floatingLabelText="ID"
                        style={input_style}
                    />
                </div>
                <div>
                    <TextField
                        hintText="Enter Password"
                        floatingLabelText="Password"
                        type="password"
                        style={input_style}
                    />
                </div>
                <div>
                    <RaisedButton
                        label="Sign In"
                        primary={true}
                        fullWidth={true}
                        onClick={
                            (e)=>{
                                e.preventDefault();
                                $(ReactDOM.findDOMNode(this)).fadeOut({
                                    duration : 500,
                                    easing : 'easeOutExpo',
                                    complete : this.props.callback
                                })
                            }
                        }
                        />
                </div>
            </Paper>
        );
    }
}