import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

        backgroundColor: theme.palette.background.paper,
    },
}));

const HistoryRecord = (props) => {

    const classes = useStyles();
    if (props.historyRecord) {
        const trips = props.historyRecord.map((record) => {
            return (
                record.trip
            );
        });
        return (
            <React.Fragment>
                <Typography variant="h3" align="center" style={{
                    fontFamily: 'Kaushan Script',
                    marginTop: '3vh', marginBottom: '3vh'
                }}>
                    History Record
                </Typography>
                <div className={classes.root}>
                    <List style={{
                        padding: "0",
                        overflow: 'auto',
                        maxHeight: '70vh',
                    }}>
                        {trips.map((trip) => {
                            return (
                                <div> <ListItem button>
                                    <Typography variant="h6" style={{
                                        fontFamily: 'Kaushan Script',

                                    }} >{trip}</Typography>

                                </ListItem>
                                    <Divider /></div>

                            );
                        })}
                    </List >
                </div>

            </React.Fragment>
        );
    }
    else {
        return <p>Loading...</p>;
    }
};

export default HistoryRecord;;;;