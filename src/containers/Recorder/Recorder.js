import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Brief from '../../components/Brief/Brief';
import Detail from '../../components/Detail/Detail';
import Copyright from '../../components/Copyright/Copyright';
class Recorder extends Component {
    render() {
        return (
            <React.Fragment >
                <Container maxWidth="lg" align="center">
                    <Grid container spacing={4}>
                        <Grid item>
                            <Brief />
                        </Grid>
                        <Grid item>
                            <Detail />
                        </Grid>
                    </Grid>
                    <Copyright />
                </Container>

            </React.Fragment >
        );
    }
}

export default Recorder;