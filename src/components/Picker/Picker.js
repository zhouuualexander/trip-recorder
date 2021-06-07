import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const day = selectedDate.getDate();
    const month = selectedDate.toLocaleString('en-US', { month: 'long' });
    return (

        <Grid>
            <Grid item>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="dialog"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item>
                <Typography variant="h3" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>{`${month}\u00A0\u00A0\u00A0\u00A0${day}`}</Typography>
            </Grid>

        </Grid>

    );
}
