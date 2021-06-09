import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const Brief = (props) => {
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                {/* <TextField required id="standard-required" label="Required" defaultValue="Hello World" /> */}
                {/* <Typography variant="h2" style={{ backgroundColor: 'blue', height: "1vh" }}></Typography> */}
                <Typography variant="h2" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh', marginBottom: '5vh' }}>{props.trip}</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        {/* <Typography variant="h2" style={{ backgroundColor: 'blue', height: "1vh" }}></Typography> */}
                        <Typography variant="h4" style={{ fontFamily: 'Kaushan Script', marginLeft: '5vh' }}>{props.date} {props.weather}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {/* <Typography variant="h2" style={{ backgroundColor: 'blue', height: "1vh" }}></Typography> */}
                        <Typography variant="h4" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh' }}>Where did we go?</Typography>

                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh' }}>{props.places}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh' }}>{props.rating}</Typography>
                    </Grid>

                </Grid>



            </Container>
        </React.Fragment >
    );
};

export default Brief;