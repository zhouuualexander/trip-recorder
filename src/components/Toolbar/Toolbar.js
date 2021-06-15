import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        background: 'primary',
        height: '6vh',
    },
    typography: {
        fontFamily: 'Kaushan Script',
        flexGrow: 1
    }
});
const ToolBar = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="relative" elevation={0} className={classes.root}>
                    <Toolbar>
                        <Typography variant="h4" color="white" noWrap className={classes.typography} >
                            Trip Recorder
                        </Typography>
                        <Link to="/trip-recorder/#" style={{ textDecoration: "none" }}>  <Tab label="Home" style={{ fontFamily: 'Kaushan Script', fontSize: '20px', textTransform: 'none', color: 'white' }} /></Link>
                        <Link to="/trip-recorder/history_record" style={{ textDecoration: "none" }}> <Tab label="History Record" style={{ fontFamily: 'Kaushan Script', fontSize: '20px', textTransform: 'none', color: 'white' }} /></Link>
                        <Link to="/trip-recorder/about_us" style={{ textDecoration: "none" }}> <Tab label="About Us" style={{ fontFamily: 'Kaushan Script', fontSize: '20px', textTransform: 'none', color: 'white' }} /></Link>
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment >
    );
};

export default ToolBar;