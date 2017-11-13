import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

const avatar_pic_style = {margin: 5};

/**
 * Component for User's Meta Profile view. <br />
 * 
 * @since 1.0.0
 * @author TACKSU
 * @updated 171113 - created
 */
const MetaProfile = (props)=>(
<div>
    <div>
        <Avatar
            src={props.img}
            size={30}
            avatar_pic_style={avatar_pic_style}
        />
    </div>
        <p> {props.name} </p>
        <p> {props.simple_profile} </p>
    <div>
        <List>
            <ListItem primaryText="최근 경력사항" leftIcon={<ContentInbox />} />
            <ListItem primaryText="메뉴 1" leftIcon={<ContentInbox />} />
            <ListItem primaryText="메뉴 2" leftIcon={<ContentInbox />} />
            <Divider />
            <ListItem primaryText="메뉴 3" leftIcon={<ContentInbox />} />
            <ListItem primaryText="메뉴 4" leftIcon={<ContentInbox />} />
            <Divider />
        </List>
        <RaisedButton
            label="Create Report"
            primary={true}
            fullWidth={true}
            height={20}
            />
    </div>
</div>
);