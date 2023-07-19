import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';

// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');

// // Create an instance of MatchReader and pass in something satisfying
// // the 'DatReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

// simplified the above steps
const matchReader = MatchReader.fromCsv('football.csv');

matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buidAndPrintReport(matchReader.matches);
