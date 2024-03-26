"use client";
import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import TaskAddForm from './TaskAddForm';
import { useState } from 'react';

const Sidebar = () => {
    const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

    const toggleTaskForm = () => {
        setIsTaskFormOpen(prev => !prev);
    }

    return (
        <Drawer variant="permanent" anchor="left" sx={{height:"100%", width:"10rem", '& .MuiPaper-root':{ position:"static", border:"solid 1px lightgray", borderTop:"none"}}}>
            <TaskAddForm isOpen={isTaskFormOpen} handleClose={toggleTaskForm}/>
            <Box sx={{display:"flex", justifyContent:"center"}}>
                <Button variant="contained" sx={{margin:"2rem 1rem"}} onClick={toggleTaskForm}>
                    + Add Task
                </Button>
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
    );
};

export default Sidebar;
 