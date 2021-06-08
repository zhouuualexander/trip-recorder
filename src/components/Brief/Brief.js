import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Picker from '../Picker/Picker';
import Slider from '../Slider/Slider';
import TextField from '@material-ui/core/TextField';
import Rating from '../Rating/Rating';
const Brief = (props) => {
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                {/* <TextField required id="standard-required" label="Required" defaultValue="Hello World" /> */}
                {/* <Typography variant="h2" style={{ backgroundColor: 'blue', height: "1vh" }}></Typography> */}
                <Typography variant="h2" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh', marginBottom: '5vh' }}>Banff National Park</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        {/* <Typography variant="h2" style={{ backgroundColor: 'blue', height: "1vh" }}></Typography> */}
                        <Typography variant="h2" style={{ fontFamily: 'Kaushan Script' }}>Date</Typography>
                        <Typography variant="h4" style={{ fontFamily: 'Kaushan Script', marginLeft: '10vh' }}>{props.date}</Typography>
                        <Typography variant="h2" style={{ fontFamily: 'Kaushan Script', marginTop: '1vh' }}>Weather</Typography>
                        <Typography variant="h4" style={{ fontFamily: 'Kaushan Script', marginLeft: '10vh' }}>{props.weather}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {/* <Typography variant="h2" style={{ backgroundColor: 'blue', height: "1vh" }}></Typography>
                        <Slider />
                        <Typography variant="h2" style={{ backgroundColor: 'blue', height: "1vh" }}></Typography> */}
                        {/* <Rating /> */}
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    {/* <Grid item>
                        <Typography variant="h2" style={{ backgroundColor: 'blue', height: "1vh" }}></Typography>
                        <Typography variant="h5" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>Money Spends</Typography>
                    </Grid> */}
                    {/* <Grid item>
                        <Typography variant="h2" style={{ backgroundColor: 'blue', height: "1vh" }}></Typography>
                        <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>$10.99 Attractions</Typography>
                        <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>$90.99 Lodge</Typography>
                        <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>$4.99 Water</Typography>
                    </Grid> */}
                </Grid>


            </Container>
        </React.Fragment>
    );
};

export default Brief;