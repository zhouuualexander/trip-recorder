import { Container, Grid, Typography, Paper, GridList } from '@material-ui/core';
import React from 'react';
import banff from '../../assets/banff.jpeg';

const detail = (props) => {
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Typography variant="h2" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh' }}>Notes</Typography>
                <Grid item sm={12}>
                    <Paper elevation={3} style={{ backgroundColor: 'white' }} >
                        <GridList cellHeight={160} cols={1} style={{
                            width: '100%', marginBottom: '1vh'
                        }}>
                            <Typography variant="h6" paragraph align="justify" style={{ fontFamily: 'Kaushan Script', color: 'black', marginTop: '10px', marginLeft: '40px', marginRight: '40px' }} >{props.notes}</Typography>
                        </GridList>
                    </Paper>
                </Grid>
                <img src={banff} alt="banff" style={{ width: '100%' }}></img>
            </Container>
        </React.Fragment >
    );
};

export default detail;