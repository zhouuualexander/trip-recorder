import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
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
                        <Picker setDate={props.setDate} />
                    </ListItem>
                    <ListItem>
                        <WeatherButton setWeather={props.setWeather} />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="明天可能会继续更新" secondary="Alex Zhou" />
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
}
