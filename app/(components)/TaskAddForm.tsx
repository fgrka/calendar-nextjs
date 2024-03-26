import React from 'react';
import { useState } from 'react';
import { Button, Dialog, DialogContent, TextField, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const TaskAddForm = ({isOpen, handleClose} : {isOpen: boolean, handleClose: () => void}) => {
    const [inputs, setInputs] = useState({});
 
    const handleInputs = (e) => {
        const name =  e.target.name;
        const value =  e.target.value;
   
        setInputs((prev) => ({
            ...prev,
            [name] : value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(inputs);
        // const data = {
        //     ...inputs,
        // };
        // const response = await fetch(" ", { //ENDPOINT
        //     method: "POST",
        //     body: JSON.stringify({data}),
        //     "content-type": "application/json", 
        // });
        // if (!response.ok) {
        //     const message = await response.json();
        //     console.log(message);
        // } else {
        //     document.location.reload();
        // }
    }

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <IconButton sx={{position:"absolute", top:"5px", right:"5px"}} onClick={handleClose}>
                <CloseIcon/>
            </IconButton>
            <DialogTitle sx={{textAlign:"center"}}>NEW TASK</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} method="post" style={{display:"flex", flexDirection:"column", rowGap:"1rem"}}>
                    <TextField name='title' label="Title" onChange={handleInputs}/>
                    <TextField name="description" label="Description" multiline onChange={handleInputs}/>
                    <TextField name="person" label="Person" onChange={handleInputs}/>
                    <Button type="submit" variant='outlined' sx={{maxWidth:"10rem", alignSelf:"center"}}>Zapisz</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default TaskAddForm;