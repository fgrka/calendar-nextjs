import { ListItem, ListItemText, List } from "@mui/material";
import React from 'react';

const TaskList = () => {

    // fetch task data and map below
    return (
        <List>
            <ListItem  sx={{padding:"0px", backgroundColor:"#e9edc9", borderRadius:"4px", marginBottom:"4px"}} disableGutters>
                <ListItemText sx={{paddingLeft:"10px"}}>Time / Task</ListItemText>
            </ListItem>
            <ListItem sx={{padding:"0px", backgroundColor:"#f5cac3", borderRadius:"4px"}} disableGutters>
                    <ListItemText sx={{paddingLeft:"10px"}}>Time / Task</ListItemText>
            </ListItem>
        </List>
    );
};

export default TaskList;