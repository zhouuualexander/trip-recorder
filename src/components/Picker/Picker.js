import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

export default function MaterialUIPickers(props) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    React.useEffect(() => {
        const day = selectedDate.getDate();
        const month = selectedDate.toLocaleString('en-US', { month: 'long' });
        const year = selectedDate.getFullYear();
        const dateString = [year, month, day].join(' ');
        if (typeof props.setDate === 'function') {
            props.setDate(dateString);
        }

    }, [selectedDate]);
    return (
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="dialog"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="When"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
        </Grid>

    );
}
