import { Container, Grid, Typography, Paper } from '@material-ui/core';
import React from 'react';

const Brief = (props) => {
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Typography variant="h2" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh', marginBottom: '3vh' }}>{props.trip}</Typography>
                <Paper elevation={3} style={{ backgroundColor: 'white', minHeight: '300px' }} >
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="h4" style={{ fontFamily: 'Kaushan Script', marginLeft: '5vh' }}>{props.date} {props.weather}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh' }}>Where did we go?</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh' }}>{props.places}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh' }}>{props.rating}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment >
    );
};

export default Brief;