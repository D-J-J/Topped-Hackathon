import React, { Component } from "react";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

const classes = useStyles();


export default class CompetitionCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }
    }

    render() {
        <Card className={classes.card}>
            <CardHeader
                title={this.props.competition.name}
            />
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <BookmarkIcon />
            </IconButton>
            <IconButton aria-label="join competition">
                <Fab
                    variant="extended"
                    size="small"
                    color="secondary"
                    aria-label="add"
                    className={classes.margin}
                >
                    Join Competition
                </Fab>
            </IconButton>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                })}
                onClick={()=> this.setState({
                    expanded: !this.state.expanded
                    })
                }
                aria-expanded={this.state.expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
            </CardActions>
            <Collapse in={this.expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>Details:</Typography>
                <Typography paragraph>
                    {this.props.competition.desc}
                </Typography>
            </CardContent>
            </Collapse>
      </Card>
    }
}