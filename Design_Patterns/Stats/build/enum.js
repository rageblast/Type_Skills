"use strict";
// Follow near-identical syntax rules as normal objects
// Creates an object with the same keys and values when converted from TS to JS
// Primary goal is to signal to other engineers that these are all closely
// related values
// Use whenever we have a small fixed set of values that are all closely related
// and known at compile time.
// whenever we create enum we create types so we can we refer it if we need
// enum MatchResult {
//   HomeWin = 'H',
//   AwayWin = 'A',
//   Draw = 'D'
// }
// we can use it as below
// enum MatchResult {
//   HomeWin ,
//   AwayWin ,
//   Draw
// }
// const printMatchResult = (): MatchResult => {
//   if(match[5] === 'H') {
//     return MatchResult.HomeWin
//   }
//   return MatchResult.AwayWin;
// }
