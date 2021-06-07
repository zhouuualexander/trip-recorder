import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value} Attractions`;
}

export default function DiscreteSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h3' id="discrete-slider" gutterBottom style={{ fontFamily: 'Kaushan Script', marginBottom: '5vh' }}>
                Attractions
      </Typography>
            <Slider
                defaultValue={3}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-always"
                valueLabelDisplay="on"
                step={1}
                marks
                min={1}
                max={10}
            />
        </div>
    );
}
