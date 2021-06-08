import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(to right, #74ebd5, #acb6e5)',
        height: '6vh',
    },
    typography: {
        fontFamily: 'Kaushan Script',
        flexGrow: 1
    }
});
const ToolBar = (props) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="relative" elevation={0} className={classes.root}>
                    <Toolbar>
                        <Typography variant="h4" color="inherit" noWrap className={classes.typography}  >
                            Trip Recorder
                        </Typography>
                        <Tabs aria-label="simple tabs example" >
                            <Tab label="Home" style={{ fontFamily: 'Kaushan Script', fontSize: '20px' }} />
                            <Tab label="Record" style={{ fontFamily: 'Kaushan Script', fontSize: '20px' }} />
                            <Tab label="About Us" style={{ fontFamily: 'Kaushan Script', fontSize: '20px' }} />
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    );
};

export default ToolBar;