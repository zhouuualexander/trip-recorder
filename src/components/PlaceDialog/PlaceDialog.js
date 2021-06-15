import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, DialogContentText, Typography, IconButton, Grid, Button, Dialog } from '@material-ui/core';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import PlaceIcon from '@material-ui/icons/Place';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Rating from '../Rating/Rating';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
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
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
    const [open, setOpen] = React.useState(false);
    const [place, setPlace] = React.useState('');


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const addPlace = (place) => {
        setPlace(place.target.value);
    };

    React.useEffect(() => {
        props.addPlace(place);
    }, [place]);

    return (
        <div>
            <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
                <PlaceIcon />
            </IconButton>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" >
                    Where did we go?
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText>
                        Please add places and rate them as well.
                    </DialogContentText>
                    <Grid container style={{ width: '500px' }}>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Places"
                                type="text"
                                fullWidth
                                onChange={addPlace}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Rating addRating={props.addPlace} place={place} />
                        </Grid>
                        <Grid item align="center" xs={12} >
                            <IconButton aria-label="add" >
                                <AddCircleIcon color="action" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
