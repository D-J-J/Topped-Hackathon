import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    gold: {
        color: "white",
        fontWeight: "bold",
        backgroundColor: "gold",
    },
    silver: {
        color: 'white',
        fontWeight: "bold",
        backgroundColor: "gray",
    },
    bronze:{
        color: 'white',
        fontWeight: "bold",
        backgroundColor: 'brown',
    }
}));

export default function LeaderboardCard(props) {
    const classes = useStyles();

    const handleProfileClick = () => {
        alert(`${props.name}`);
    };

    return (
        <Card>
            <CardContent >
                <Grid container spacing={2}>
                    <Grid item xs>
                        <span className={`${props.placement === 1 ? `${classes.gold}` : ""} 
                                          ${props.placement === 2 ? `${classes.silver}` : ""} 
                                          ${props.placement === 3 ? `${classes.bronze}` : ""}`}>
                                {props.placement}
                        </span>
                    </Grid>
                    <Grid item xs>
                        {props.name}
                    </Grid>
                    <Grid item xs>
                        <IconButton onClick={handleProfileClick}> <PlayArrowIcon /> </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}