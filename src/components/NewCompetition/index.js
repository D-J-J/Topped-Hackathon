import React from 'react';
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import {
	makeStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(2,3),
            width: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        },
	},
}));

export default function NewCompetition() {
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = date => {
		setSelectedDate(date);
    };
    
    const handleFormSubmission = event => {
        var compName = document.getElementById("compName").value;
        var compDesc = document.getElementById("compDesc").value;
        var compStart = document.getElementById("compStart").value;
        var compEnd = document.getElementById("compEnd").value;
        var compProblems = document.getElementById("compProblems").value;
        console.log(compName, compDesc, compStart, compEnd, compProblems);
        event.preventDefault()
      }

	return ( 
    <div>
        <div className={classes.root}>
            <TextField
                required
                id="compName"
                label="Competition Name"
                helperText="Competition Name"
                variant="outlined"
                />
            <TextField
                required
                id="compDesc"
                label="Description"
                helperText="Description"
                variant="outlined"
                />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="compStart"
                label="Start Date"
                value={selectedDate}
                onChange={handleDateChange}
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
                label="End Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>
            <TextField
                required
                id="compProblems"
                label="# Problems"
                helperText="# Problems"
                variant="outlined"
                />
            <Button 
                variant="outlined"
                id="compSubmit"
                type="submit"
                onClick={handleFormSubmission}>
                    Submit 
            </Button>
        </div>
    </div>
	);
}