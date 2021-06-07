import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const brief = (props) => {
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Typography variant="h2" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh' }}>Banff National Park</Typography>
                <Grid container spacing={10}>
                    <Grid item>
                        <Typography variant="h6" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>16, May</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" style={{ fontFamily: 'Kaushan Script', marginTop: '10vh' }}>4 Attractions</Typography>
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