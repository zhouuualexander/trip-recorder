import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Picker from '../Picker/Picker';
import Slider from '../Slider/Slider';
import TextField from '@material-ui/core/TextField';
import Rating from '../Rating/Rating';
const brief = (props) => {
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                {/* <TextField required id="standard-required" label="Required" defaultValue="Hello World" /> */}
                <Typography variant="h2" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh', marginBottom: '5vh' }}>Banff National Park</Typography>
                <Grid container spacing={10}>
                    <Grid item>
                        <Picker />
                    </Grid>
                    <Grid item>
                        <Slider />
                        <Rating />
                    </Grid>
                </Grid>
                <Grid container spacing={10}>
                    <Grid item>
                        <Typography variant="h5" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>Money Spends</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>$10.99 Attractions</Typography>
                        <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>$90.99 Lodge</Typography>
                        <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>$4.99 Water</Typography>
                    </Grid>
                </Grid>


            </Container>
        </React.Fragment>
    );
};

export default brief;