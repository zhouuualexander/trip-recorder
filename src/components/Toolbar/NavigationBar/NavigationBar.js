import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles(() => ({
    root: {
        marginLeft: '80vh',
    },
}));
export default function NavigationBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Tabs aria-label="simple tabs example" >
                <Tab label="Home" style={{ fontFamily: 'Kaushan Script', fontSize: '20px' }} />
                <Tab label="Record" style={{ fontFamily: 'Kaushan Script', fontSize: '20px' }} />
                <Tab label="About Us" style={{ fontFamily: 'Kaushan Script', fontSize: '20px' }} />
            </Tabs>
        </div>
    );
}
