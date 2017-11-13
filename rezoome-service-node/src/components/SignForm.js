import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'

const paper_style = {
  width: "100%",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

const SignForm = () => (
<Paper
    sylte={paper_style}
    zDepth={2}>
    <Table>
        <TableBody
            displayRowCheckbox={false} >
            <TableRow>
                <TableRowColumn>
                <TextField
                    hintText="id@example.com"
                    floatingLabelText="ID"
                />
                </TableRowColumn>
                <TableRowColumn>
                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    type="password"
                />
                </TableRowColumn>
            </TableRow>
        </TableBody>
    </Table>
    <div>
        <RaisedButton
            label="Sign In"
            primary={true}
            
            fullWidth={true} />
    </div>
</Paper>
);

export default SignForm;