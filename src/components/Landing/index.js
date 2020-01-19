import React from "react";
// import CompetitionProblemCard from "../Competition/CompetitionProblemCard";
import CompetitionCard from "../Competition/CompetitionCard";

// let problems = [];
// for (var i = 0; i < 3; i++) {
//     problems.push({ problem_number: i, attempts_made: 1, completed: false });
// }

let competitions = [];
for (var i = 0; i < 2; i++) {
    competitions.push({
        id: i,
        name: "competition " + i,
        desc: "description " + i,
        startDate: new Date(),
        endDate: new Date(),
        duration: 1000,
        problems: 50,
        status: 1,
        admins: 1
    });
}

const Landing = () => (
    <div>
        <h1>Competitions</h1>
        {competitions.map(x => {
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
        })}
    </div>
);

export default Landing;