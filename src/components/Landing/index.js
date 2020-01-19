import React, { Component } from "react";
import { withFirebase } from "../Firebase";
// import CompetitionProblemCard from "../Competition/CompetitionProblemCard";
import { compose } from "recompose";
import CompetitionCard from "../Competition/CompetitionCard";

// let problems = [];
// for (var i = 0; i < 3; i++) {
//     problems.push({ problem_number: i, attempts_made: 1, completed: false });
// }

// onComponentUpdate()??

// let testComp = [];
// for (var i = 0; i < 2; i++) {
//     testComp.push({
//         id: i,
//         name: "competition " + i,
//         desc: "description " + i,
//         startDate: new Date(),
//         endDate: new Date(),
//         duration: 1000,
//         problems: 50,
//         status: 1,
//         admins: 1
//     });
// }

class LandingBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            competitions: []
        };
    }

    componentDidMount() {
        this.props.firebase
            .receiveCompetitionUpdates(this.competitionUpdateCallback);
    }

    competitionUpdateCallback = (result) => {
        this.setState({ competitions: [] }) // Empty array
        result.forEach(doc => {
            this.setState(prevState => ({
                competitions: [...prevState.competitions, doc.data()] // Append to array
            }));
        })
    }

    render() {
        return (
            <div>
                <h1>Competitions</h1>
                {this.state.competitions ? this.state.competitions.map(x => {
                    return (
                        <CompetitionCard
                            id = {x.id}
                            name = {x.name}
                            desc = {x.desc}
                            startDate = {x.startDate}
                            endDate = {x.endDate}
                            duration = {x.duration}
                            problems = {x.problems}
                            status = {x.status}
                            admins = {x.admins}
                        />

                        // <CompetitionProblemCard
                        //     problem_number={x.problem_number}
                        //     attempts_made={x.attempts_made}
                        //     completed={x.completed}
                        // />
                    )
                }) : null}
            </div>
        )
    }
}

const Landing = compose(
    withFirebase
)(LandingBase);

export default Landing;