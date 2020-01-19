import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class CompetitionProblemCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            attempts_made: props.attempts_made,
            completed: props.completed
        };
    }

    toggleEdit = () => {
        this.setState((state) => {
            return { edit: !state.edit };
        });
    }

    incrementAttempts = () => {
        this.setState((state) => {
            return { attempts_made: state.attempts_made + 1 };
        });
    }

    decrementAttempts = () => {
        this.setState((state) => {
            return { attempts_made: state.attempts_made - 1 };
        });
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            {this.props.problem_number}
                        </Grid>
                        <Grid item xs>
                            {!this.state.edit
                                ?
                                <div>{`Attempts made:` + this.state.attempts_made} </div>
                                :
                                <div>
                                    <IconButton onClick={this.decrementAttempts}> <RemoveIcon /> </IconButton>
                                    {this.state.attempts_made}
                                    <IconButton onClick={this.incrementAttempts}> <AddIcon /> </IconButton>
                                </div>
                            }
                        </Grid>
                        <Grid item xs>
                            {this.state.completed ? < DoneIcon /> : <CloseIcon />
                            }
                        </Grid>
                        <Grid item xs>
                            {!this.state.edit
                                ?
                                <IconButton onClick={this.toggleEdit}> <EditIcon /> </IconButton>
                                :
                                <IconButton onClick={this.toggleEdit}> <PlayArrowIcon /> </IconButton>
                            }
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default CompetitionProblemCard;