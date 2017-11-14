import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import $ from 'jquery';

import {
    Table,
    TableHeader,
    TableHeaderColumn,
    TableBody,
    TableRow,
    TableRowColumn
}
from 'material-ui/Table';

/**
 * Scrollable dialog for add user's record from BlockChain nexledger. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @update 171114 - created.
 */
class AddRecordDialog extends React.Component {

    state = {
        open: false,
        selectable: true
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    records = [{
        type : "Testtype",
        grade : "grade",
        date : "asdfasd"
    }];
    
    addRecord(options) {
        this.records.push(options);
    }
    
    fetch = () => {
        console.log('start fetch');
        $.ajax({
            url : '/api/record/010-0000-1111',
            method : 'GET'
        }).done((data)=>{
            console.log(data);
            var result = JSON.parse(data);
            result.data.data.map((item)=>{
                this.addRecord({
                    type : "opic",
                    grade : item.score,
                    date : item.name
                }) 
            })
            this.forceUpdate();
        })
    }

    render() {
        const buttons = [
            <FlatButton
                    label="Cancel"
                    primary={true}
                    onClick={this.handleClose}
                />,

            <FlatButton
                    label="Submit"
                    primary={true}
                    keyboardFocused={true}
                    onClick={this.handleClose}
                />,
        ];

        return (
            <div>
                <RaisedButton label="Add Record" onClick={this.handleOpen} />
                    <Dialog
                      title="Add record"
                      actions={buttons}
                      modal={true}
                      open={this.state.open}
                      onRequestClose={this.handleClose}
                      autoScrollBodyContent={true} >
                        <div>
                            <div>
                                <SelectField
                                  floatingLabelText="Category"
                                    //   value={}
                                    //   onChange={}
                                >
                                <MenuItem value={1} primaryText="Education" />
                                <MenuItem value={2} primaryText="Careers" />
                                <MenuItem value={3} primaryText="SW Cert" />
                                <MenuItem value={4} primaryText="TOEIC" />
                                <MenuItem value={5} primaryText="OPIc" />
                                </SelectField>
                            </div>
                            <div>
                                <RaisedButton
                                    id="Search Records"
                                    label="Add Record"
                                    fullWidth={true}
                                    onClick={this.fetch}
                                    />
                            </div>
                        </div>
                        <div>
                            <Table
                                selectable={this.state.selectable} >
                                <TableHeader>
                                    <TableRow>
                                        <TableHeaderColumn>
                                        Type
                                        </TableHeaderColumn>
                                        <TableHeaderColumn>
                                        Grade
                                        </TableHeaderColumn>
                                        <TableHeaderColumn>
                                        Date
                                        </TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        this.records.map((entry)=>(
                                            <TableRow>
                                                <TableRowColumn>
                                                {
                                                    entry.type
                                                }
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                {
                                                    entry.grade
                                                }
                                                </TableRowColumn>
                                                <TableRowColumn>
                                                {
                                                    entry.date
                                                }
                                                </TableRowColumn>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </Dialog>
                </div>
            );
    };
}

export default AddRecordDialog;