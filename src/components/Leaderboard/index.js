import React from "react";
import LeaderboardCard from "../Leaderboard/LeaderboardCard";

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

let users = [];
for (var j = 1; j< 5; j++) {
    users.push({
        id: j,
        name: "Darren " + j,
        placement: j,
    });
}

const Leaderboard = () => (
    <div>
        <h1>Leaderboard</h1>
        {users.map(x => {
            console.log(x);
            return (
                <LeaderboardCard
                id = {x.id}
                name = {x.name}
                placement = {x.placement} />
            )
        })}
    </div>
);

export default Leaderboard;