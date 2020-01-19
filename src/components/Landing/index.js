import React from "react";
import CompetitionProblemCard from "../Competition/CompetitionProblemCard";

let problems = [];
for (var i = 0; i < 3; i++) {
    problems.push({ problem_number: i, attempts_made: 1, completed: false });
}

const Landing = () => (
    <div>
        <h1>Competitions</h1>
        {problems.map(x => {
            return (
                <CompetitionProblemCard
                    problem_number={x.problem_number}
                    attempts_made={x.attempts_made}
                    completed={x.completed}
                />
            )
        })}
    </div>
);

export default Landing;