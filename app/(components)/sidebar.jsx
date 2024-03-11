"use client";
 
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const Sidebar = () => {
    
    return (
        <div>
        <Drawer variant="permanent" anchor="left" sx={{height:"100%", width:"10rem", '& .MuiPaper-root':{ position:"static"}}}>
            <Divider />
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <Button variant="contained" sx={{margin:"2rem 1rem"}}>+ Add Task</Button>
            </Box>
                <List >
                        <ListItem disablePadding>
                            <ListItemButton>
                                INFO 1
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                INFO 2
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                INFO 3
                            </ListItemButton>
                        </ListItem>
                </List>
        </Drawer>
        </div>
    );
};

export default Sidebar;
 