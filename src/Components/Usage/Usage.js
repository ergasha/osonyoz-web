import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

import { HiPencil } from "react-icons/hi";

import './Usage.css'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: '#ff8080'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[900],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: '#ff6666'
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    backgroundColor: '#ff4d4d'
  },
}))(MuiDialogActions);

function Usage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="usage">
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{color: 'white', backgroundColor: '#ec4c4c'}}>
        Qo'llanma
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <h4>Oson yozamiz bot</h4>
           <h5>Qo'llanma</h5>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom className="text">
            <HiPencil /> 34 Turdagi husnixatlardan birini tanlang <br />
            <HiPencil /> Matn kattaligi va orasidagi qoladigan joylarini sozlang agar kerak bo'lmasa shunday qoldiring <br />
            <HiPencil /> Matnning qalinligini tanlang agar kerak bo'lmasa shunday qoldiring <br />
            <HiPencil /> Harflarning yaqinligini kerakli tarzda sozlang yoki shunday qoldiring<br />
            <HiPencil /> Yozuv rangini va varoq rangini tanlang yoki shunday qoldiring<br />
            <HiPencil /> Varoq hajmini sozlang yoki shunday qoldiring<br />
            <HiPencil /> Varoq chiziqlarini shozlang agar kerak bo'lsa<br />
            <HiPencil /> Agar sizga varoq chegarasida soya kerak bo'lsa ubni qo'shing<br />
            <HiPencil /> Sahifani yon va qatorlar kattaligini sozlang yoki shunday qoldiring <br />
            
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Usage