import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NavigationBar from './NavigationBar/NavigationBar';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
        height: '7vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    typography: {
        fontFamily: 'Kaushan Script',
        display: 'flex',
        justifyContent: 'center',
    }
});

const ToolBar = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="relative" elevation={0} className={classes.root} alignItems="center">
                <Toolbar>
                    <Typography variant="h4" color="inherit" noWrap className={classes.typography}  >
                        Trip Recorder
        </Typography>
                    <NavigationBar />
                </Toolbar>

            </AppBar>

        </React.Fragment>
    );
};

export default ToolBar;