import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

export default function BriefRatings(props) {
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent" style={{ marginLeft: '40px' }}>
                <Typography component="legend">How do you like it?</Typography>
                <StyledRating
                    name="customized-color"
                    defaultValue={0}
                    value={props.value}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                />
            </Box>
        </div>
    );
}
