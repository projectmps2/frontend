import React, {Component} from 'react';
import './Status.css'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Status from './Status'

export default function ControlledTooltips(props) {
    const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  console.log(props.dataPerson);

    return (
            <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title='Username'> {props.dataPerson.userName} </Tooltip>
    );
}