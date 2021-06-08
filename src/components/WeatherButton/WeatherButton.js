import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import AcUnitIcon from '@material-ui/icons/AcUnit';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function GroupSizesColors(props) {
    const [onSun, setOnSun] = React.useState(false);
    const [onSnow, setOnSnow] = React.useState(false);
    const [onCloud, setOnCloud] = React.useState(false);

    const handleSunClickOpen = () => {
        setOnSun(!onSun);
        setOnSnow(false);
        setOnCloud(false);
        props.setWeather('Sunny');
    };
    const handleSnowClickOpen = () => {
        setOnSun(false);
        setOnSnow(!onSnow);
        setOnCloud(false);
        props.setWeather('Snowy');
    };
    const handleCloudClickOpen = () => {
        setOnCloud(!onCloud);
        setOnSun(false);
        setOnSnow(false);
        props.setWeather('Cloudy');
    };

    return (
        <div >
            <IconButton size="small" aria-label="small outlined button group" color={onSun === true ? "primary" : ""} onClick={handleSunClickOpen}>
                <WbSunnyIcon />
            </IconButton>
            <IconButton size="small" aria-label="small outlined button group" color={onCloud === true ? "primary" : ""} onClick={handleCloudClickOpen}>
                <CloudIcon />
            </IconButton>
            <IconButton size="small" aria-label="small outlined button group" color={onSnow === true ? "primary" : ""} onClick={handleSnowClickOpen}>
                <AcUnitIcon />
            </IconButton>
        </div>
    );
}
