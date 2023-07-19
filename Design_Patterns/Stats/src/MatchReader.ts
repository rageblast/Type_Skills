import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResults';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

// row[5] as MatchResult - type assertion
// it can be of any type - like number, enum, interface etc

//  matches: MatchData[] = [];
// array inside array - with tuples type
// when we use tuples we need to use it like this

// the load will convert the value of the CSv Reader
// to the desired format we want
// the desired format is MatchData

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
