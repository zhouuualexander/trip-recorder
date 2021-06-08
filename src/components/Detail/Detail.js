import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import banff from '../../assets/banff.jpeg';
const detail = (props) => {
    return (
        <React.Fragment>
            <Container maxWidth="sm">

                <Typography variant="h2" style={{ fontFamily: 'Kaushan Script', marginTop: '3vh' }}>Details</Typography>
                <Typography variant="h6" paragraph align="justify" >Banff National Park is Canada's oldest national park, established in 1885. Located in Alberta's Rocky Mountains, 110–180 kilometres (68–112 mi) west of Calgary, Banff encompasses 6,641 square kilometres (2,564 sq mi)[3] of mountainous terrain, with many glaciers and ice fields, dense coniferous forest, and alpine landscapes. The Icefields Parkway extends from Lake Louise, connecting to Jasper National Park in the north. Provincial forests and Yoho National Park are neighbours to the west, while Kootenay National Park is located to the south and Kananaskis Country to the southeast. The main commercial centre of the park is the town of Banff, in the Bow River valley. </Typography>
                <img src={banff} alt="banff" style={{ width: '100%' }}></img>
            </Container>
        </React.Fragment>
    );
};

export default detail;