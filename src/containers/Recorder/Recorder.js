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
import axios from '../../axios-recorder';
import AboutUs from '../../components/AboutUs/AboutUs';
import HistoryRecord from '../../components/HistoryRecord/HistoryRecord';
import { Route } from 'react-router-dom';

import FullscreenDialog from '../../components/FullscreenDialog/FullscreenDialog';
class Recorder extends Component {
    componentDidMount() {
        axios.get('https://trip-recorder-ce49c-default-rtdb.firebaseio.com/recorder.json')
            .then((response) => {
                this.setState({
                    recorder: response.data[Object.keys(response.data).reverse()[0]],
                    historyRecord: Object.values(response.data)
                });
                console.log(response.data[Object.keys(response.data)[0]]);
                console.log(Object.values(response.data));
            });
    }
    clickButton = () => {
        console.log('recorder');
    };
    state = {
        historyRecord: null,
        selectedFile: null,
        recorder: null,
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

    saveDataHandler = () => {
        const data = {
            weather: this.state.weather,
            trip: this.state.trip,
            date: this.state.date,
            notes: this.state.notes,
            places: this.state.places,
            selectedFile: this.state.selectedFile,
        };
        axios.post('/recorder.json', data)
            .then((response) => {
                // this.setState({ recorder: response.data });
                console.log(2, response.config.data);
                axios.get('https://trip-recorder-ce49c-default-rtdb.firebaseio.com/recorder.json')
                    .then((response) => {
                        this.setState({ recorder: response.data[Object.keys(response.data).reverse()[0]] });
                        console.log(response.data[Object.keys(response.data)[0]]);
                    });
            })
            .catch((error) => {
                console.log(error);
            });


    };
    render() {
        let weather = null;
        let style = { fontSize: 20, marginLeft: '10px' };
        if (this.state.recorder) {
            switch (this.state.recorder.weather) {
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
        }

        let rating = null;
        let x = this.state.places[0].rating;
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
        let brief = <p>loading...</p>;
        let detail = <p>loading...</p>;
        if (this.state.recorder) {
            let rating = null;
            let x = this.state.recorder.places[0].rating;
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
            brief = (
                <Brief weather={this.state.recorder.weather} date={this.state.recorder.date} places={this.state.recorder.places[0].name} rating={rating} trip={this.state.recorder.trip} />
            );
            detail = <Detail notes={this.state.recorder.notes} />;
        }
        else {
            brief = (
                <Brief weather={this.state.weather} date={this.state.date} places={this.state.places[0].name} rating={rating} trip={this.state.trip} />
            );
            detail = <Detail notes={this.state.notes} />;

        }
        return (
            <React.Fragment >
                <Container maxWidth="lg">
                    <Route path='/trip-recorder' exact render={() => {
                        return (<Grid container>
                            <Grid item xs={12} align="center" >
                                <Typography variant="h2" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh' }}>My trip record</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                {brief}
                            </Grid>
                            <Grid item xs={6}>
                                {detail}
                            </Grid>
                            <Grid item xs={12} align="center">
                                <FullscreenDialog
                                    setWeather={this.setWeatherHandler}
                                    setDate={this.setDateHandler}
                                    addPlace={this.addPlaceHandler}
                                    setTrip={this.setTripNameHandler}
                                    setNotes={this.setNotesHandler}
                                    upload={this.handleUploadClick}
                                    save={this.saveDataHandler} />
                            </Grid>
                        </Grid>

                        );
                    }} />
                    <Route path="/history_record" exact render={() => (
                        <HistoryRecord historyRecord={this.state.historyRecord} />
                    )} />
                    <Route path="/about_us" exact component={AboutUs} />

                    <Copyright />
                </Container>

            </React.Fragment >
        );
    }
}

export default Recorder;;