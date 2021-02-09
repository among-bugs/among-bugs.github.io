"use strict";

const player = [{
        name: 'Andreas',
        nickName: 'Xyp9x',
        surname: 'Højsleth',
        age: 25,
        country: countries.DNK,
        currentTeam: team.Astralis.teamName,
        img: `img/teams/Astralis/players/Andreas-Højsleth.png`
    },
    {
        name: 'Peter',
        nickName: 'dupreeh',
        surname: 'Rasmussen',
        age: 27,
        country: countries.DNK,
        currentTeam: team.Astralis.teamName,
        img: `img/teams/Astralis/players/Peter-Rasmussen.png`
    },
    {
        name: 'Lukas',
        nickName: 'gla1ve',
        surname: 'Rossander',
        age: 25,
        country: countries.DNK,
        currentTeam: team.Astralis.teamName,
        img: `img/teams/Astralis/players/Lukas-Rossander.png`
    },
    {
        name: 'Nicolai',
        nickName: 'device',
        surname: 'Reedtz',
        age: 25,
        country: countries.DNK,
        currentTeam: team.Astralis.teamName,
        img: `img/teams/Astralis/players/Nicolai-Reedtz.png`
    },
    {
        name: 'Emil',
        nickName: 'Magisk',
        surname: 'Reif',
        age: 22,
        country: countries.DNK,
        currentTeam: team.Astralis.teamName,
        img: `img/teams/Astralis/players/Emil-Reif.png`
    }
];

const teamPlayers = [];

function getTeamPlayers() {
    for (let indTeam in team) {
        for (let ind = 0; ind < 5; ind++) {
            console.log(player[ind].nickName);
            if (player[ind].currentTeam == team[indTeam].teamName) {
                teamPlayers.push(`${player[ind].nickName}`);
            }
        }
    }
}

getTeamPlayers();

console.log(teamPlayers);