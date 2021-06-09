import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Brief from '../../components/Brief/Brief';
import Detail from '../../components/Detail/Detail';
import Copyright from '../../components/Copyright/Copyright';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import BriefRating from '../../components/Rating/BriefRating';

import FullscreenDialog from '../../components/FullscreenDialog/FullscreenDialog';
class Recorder extends Component {
    clickButton = () => {
        console.log('recorder');
    };
    state = {
        selectedFile: null,
        trip: 'Unknown',
        weather: 'Weather ?',
        date: 'Date ?',
        notes: 'Unknown',
        places: [
            { name: 'Unknown', rating: 'Unknown' }
        ]
    };
    handleUploadClick = (event) => {
        var file = event.target.files[0];
        const reader = new FileReader();
        var url = reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            this.setState({
                selectedFile: [reader.result]
            });
        }.bind(this);
        this.setState({
            selectedFile: event.target.files[0],
        });
    };

    setWeatherHandler = (weather) => {
        this.setState({ weather: weather });
    };
    setDateHandler = (date) => {
        this.setState({ date: date });
    };
    addPlaceHandler = (place, rating) => {
        this.setState({ places: [{ name: place, rating: rating }] });
    };
    setTripNameHandler = (name) => {
        this.setState({ trip: name });
    };
    setNotesHandler = (details) => {
        this.setState({ notes: details });
    };
    render() {
        let weather = null;
        let style = { fontSize: 20, marginLeft: '10px' };
        switch (this.state.weather) {
            case ('Sunny'):
                weather = <WbSunnyIcon style={style} />;
                break;
            case ('Cloudy'):
                weather = <CloudIcon style={style} />;
                break;
            case ('Snowy'):
                weather = <AcUnitIcon style={style} />;
                break;
            default:
                weather = 'Weather ?';
        }
        let rating = null;
        var x = this.state.places[0].rating;
        if (typeof x === 'number') {
            switch (x) {
                case (x):
                    rating = <BriefRating value={x} />;
                    break;
                default:
                    rating = 'Rating ?';
            }
        }
        else {
            rating = '';
        }

        return (
            <React.Fragment >
                <Container maxWidth="lg">
                    {/* <Typography variant="h2" style={{ backgroundColor: 'black', height: '5vh' }}></Typography> */}
                    <Grid container>
                        <Grid item xs={6}>
                            <Brief weather={weather} date={this.state.date} places={this.state.places[0].name} rating={rating} trip={this.state.trip} />
                        </Grid>
                        <Grid item xs={6}>
                            <Detail notes={this.state.notes} />

                        </Grid>
                        <Grid item xs={12} align="center">
                            <FullscreenDialog
                                setWeather={this.setWeatherHandler}
                                setDate={this.setDateHandler}
                                addPlace={this.addPlaceHandler}
                                setTrip={this.setTripNameHandler}
                                setNotes={this.setNotesHandler}
                                upload={this.handleUploadClick} />
                        </Grid>
                    </Grid>
                    <Copyright />
                </Container>

            </React.Fragment >
        );
    }
}

export default Recorder;;