import React from 'react';
import { makeStyles, TextField, Slide, Button, Dialog, ListItem, List, Divider, Typography, IconButton, AppBar, Toolbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Picker, WeatherButton, PlaceDialog, UploadButton } from '../../components';
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [trip, setTrip] = React.useState('Trip to be named');
    const [note, setNote] = React.useState('Notes to be updated');
    const handleTrip = (trip) => {
        console.log('Trip');
        setTrip(trip.target.value);
    };
    const handleNotes = (note) => {
        setNote(note.target.value);
    };
    React.useEffect(() => {
        props.setTrip(trip);
        props.setNotes(note);
    }, [trip, note]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        props.save();
    };

    const handleButtonClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton aria-label="add" >
                <AddCircleIcon color="action" onClick={handleClickOpen} />
            </IconButton>

            <Dialog open={open} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleButtonClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Add details
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem >
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Trip Name"
                            type="text"
                            onChange={handleTrip}
                            fullWidth
                        />
                    </ListItem>
                    <ListItem >
                        <Picker setDate={props.setDate} />
                    </ListItem>
                    <ListItem>
                        <WeatherButton setWeather={props.setWeather} />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <PlaceDialog addPlace={props.addPlace} />
                    </ListItem>
                    <ListItem>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Multiline"
                            multiline
                            rowsMax={10}
                            style={{ width: 500 }}
                            onChange={handleNotes}
                        />
                    </ListItem>
                    <ListItem button>
                        <UploadButton upload={props.upload} />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
}
