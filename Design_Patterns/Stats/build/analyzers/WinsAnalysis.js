"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResults_1 = require("../MatchResults");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let Wins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResults_1.MatchResult.HomeWin) {
                Wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResults_1.MatchResult.AwayWin) {
                Wins++;
            }
        }
        return `Team ${this.team} won ${Wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
