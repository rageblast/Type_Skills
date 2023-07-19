// Logic
// import fs from 'fs';

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

import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('/n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
