import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Picker from '../Picker/Picker';
import WeatherButton from '../WeatherButton/WeatherButton';
import PlaceDialog from '../PlaceDialog/PlaceDialog';
import TextField from '@material-ui/core/TextField';
import UploadButton from '../UploadButton/UploadButton';
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
    };

    return (
        <div>
            <IconButton aria-label="add" >
                <AddCircleIcon color="action" onClick={handleClickOpen} />
            </IconButton>

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
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
