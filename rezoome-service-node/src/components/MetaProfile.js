import React from 'react';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider'
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Paper from 'material-ui/Paper'

const avatar_pic_style = {
    
};

/**
 * Component for User's Meta Profile view. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171113 - created
 */
const MetaProfile = (props) => (
<Paper
    zDepth={2}>
    <div>
        <div className="meta_profile">
            <Avatar
                src={props.img}
                size={167}
                avatar_pic_style={avatar_pic_style}
            />
            <h1 className="meta_name"> {props.name} </h1>
            <h1 className="meta_simple"> {props.simple_profile} </h1>
        </div>
        <List>
            <ListItem primaryText="Latest record" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Menu 01" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Menu 02" leftIcon={<ContentInbox />} />
            <Divider />
            <ListItem primaryText="Menu 03" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Menu 04" leftIcon={<ContentInbox />} />
            <Divider />
        </List>
        <RaisedButton
            label="Create Report"
            primary={true}
            fullWidth={true}
            height={20}
            onClick={props.callback}
            />
    </div>
</Paper>
);

export default MetaProfile;