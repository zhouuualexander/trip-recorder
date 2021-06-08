import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Brief from '../../components/Brief/Brief';
import Detail from '../../components/Detail/Detail';
import Copyright from '../../components/Copyright/Copyright';
import Typography from '@material-ui/core/Typography';
import FullscreenDialog from '../../components/FullscreenDialog/FullscreenDialog';
class Recorder extends Component {
    clickButton = () => {
        console.log('recorder');
    };
    state = {
        weather: 'Unknown',
        date: 'Unknown'
    };
    setWeatherHandler = (weather) => {
        this.setState({ weather: weather });
    };
    setDateHandler = (date) => {
        this.setState({ date: date });
    };
    render() {
        return (
            <React.Fragment >
                <Container maxWidth="lg">
                    {/* <Typography variant="h2" style={{ backgroundColor: 'black', height: '5vh' }}></Typography> */}
                    <Grid container>
                        <Grid item xs={6}>
                            <Brief weather={this.state.weather} date={this.state.date} />
                        </Grid>
                        <Grid item xs={6}>
                            <Detail />
                        </Grid>
                        <Grid item xs={12} align="center">
                            <FullscreenDialog setWeather={this.setWeatherHandler} setDate={this.setDateHandler} />
                        </Grid>
                    </Grid>
                    <Copyright />
                </Container>

            </React.Fragment >
        );
    }
}

export default Recorder;;