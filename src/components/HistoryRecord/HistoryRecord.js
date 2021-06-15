import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Dialog from '../HistoryRecord/HistoryRecordDialog/HistoryRecordDialog';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

        backgroundColor: theme.palette.background.paper,
    },
}));

const HistoryRecord = (props) => {

    const classes = useStyles();
    if (props.historyRecord) {

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
                        {props.historyRecord.map((record) => {
                            return (
                                <div> <ListItem onClick={() => console.log('You just clicked me')}>
                                    <Typography variant="h6" style={{
                                        fontFamily: 'Kaushan Script',
                                        flexGrow: '1'
                                    }} >{record.trip}</Typography>
                                    <Dialog name={record.trip} date={record.date} notes={record.notes} places={record.places} weather={record.weather} />
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