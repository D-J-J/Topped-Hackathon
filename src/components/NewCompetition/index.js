import React, { Component } from "react";
import 'date-fns';
import TextField from '@material-ui/core/TextField';
// import {
// 	makeStyles
// } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import { withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import Competition from "../../models/competition";


// const useStyles = makeStyles(theme => ({
// 	root: {
// 		'& .MuiTextField-root': {
// 			margin: theme.spacing(2,3),
//             width: 200,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center"
//         },
// 	},
// }));

const SubmissionPage = () => (
    <div>
        <h1>Submit a new Competition</h1>
        <SubmissionForm />
    </div>
);

const INITIAL_STATE = {
    compName: "",
    compDesc: "",
    compStart: new Date(),
    compEnd: new Date(),
    compProblems: null,
    selectedDate: null
};

class SubmissionFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
            
    onSubmit = event => {
        const { compName, compDesc, compStart, compEnd, compProblems } = this.state;
        //Do checks here and submit to firebase.\
        this.props.firebase
            .doInsertCompetition(new Competition("id", compName, compDesc, compStart, compEnd, compProblems, 0, ""));
        console.log(compName, compDesc, compStart, compEnd, compProblems);
        event.preventDefault();
    };

    onChange = event => {
        console.log(event.target.id);
        this.setState({ [event.target.id]: event.target.value});
    };

    onChangeDateStart = date => {
        this.setState({ compStart: date});
    };

    onChangeDateEnd = date => {
        this.setState({ compEnd: date});
    };


    render() {
        const { compName, compDesc, compStart, compEnd,compProblems} = this.state;            
        const isInvalid = compName === "" || compDesc === "" || compStart === "" || compEnd === "" || compProblems === "";

        return (
            <div>
                <TextField
                    required
                    id="compName"
                    label="Competition Name"
                    value={compName}
                    onChange={this.onChange}
                    variant="outlined"
                    />
                <TextField
                    required
                    id="compDesc"
                    label="Description"
                    value={compDesc}
                    onChange={this.onChange}
                    variant="outlined"
                    />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    value={compStart}
                    onChange={this.onChangeDateStart}
                    id="compStart"
                    label="Start Date"
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                    }}
                    />
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="compEnd"
                    value={compEnd}
                    onChange={this.onChangeDateEnd}
                    label="End Date"
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                    }}
                    />
                </MuiPickersUtilsProvider>
                <TextField
                    required
                    id="compProblems"
                    label="# Problems"
                    value={compProblems}
                    onChange={this.onChange}
                    helperText="# Problems"
                    variant="outlined"
                    type="number"
                    />
                <Button 
                    variant="outlined"
                    id="compSubmit"
                    type="submit"
                    disabled={isInvalid}
                    onClick={this.onSubmit}>
                        Submit 
                </Button>
            </div>
        );
    }
}

const SubmissionForm = compose(
    withRouter,
    withFirebase
)(SubmissionFormBase);

export default SubmissionPage;


export { SubmissionForm };