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
for (var i = 1; i < 5; i++) {
    users.push({
        id: i,
        name: "Darren " + i,
        placement: i,
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