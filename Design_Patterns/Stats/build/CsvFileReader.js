"use strict";
// Logic
// import fs from 'fs';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
// // below encoding: 'utf-8' - gives us string
// // if we did'nt include the option we will get buffer
// const matches = fs
//   .readFileSync('football.csv', {
//     encoding: 'utf-8',
//   })
//   .split('\n')
//   .map((row: string): string[] => {
//     return row.split(',');
//   });
// // returns string
// // " 10/08/2018,Man United,Leicester,2,1,H,A Marriner
// // 11/08/2018,Bournemouth,Cardiff,2,0,H,K Friend"
// // |
// // | .split("/n") - new line character - returns string[]
// //[
// // " 10/08/2018,Man United,Leicester,2,1,H,A Marriner",
// // "11/08/2018,Bournemouth,Cardiff,2,0,H,K Friend"
// // ]
// // see the commas("") of first and second
// // |
// // | map + spit - returns string[][]
// // [
// //  ['10/08/2018', 'Man United', 'Leicester', '2', '1', 'H', 'A Marriner'],
// //  ['11/08/2018', 'Bournemouth', 'Cardiff', '2', '0', 'H', 'K Friend'],
// // ];
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('/n')
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvFileReader = CsvFileReader;
