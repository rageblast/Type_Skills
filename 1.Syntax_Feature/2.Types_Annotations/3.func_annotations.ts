// annotations for function itself not varaiable
// see the 1.annotations for varaiable

const add = (a: number, b: number): number => {
  return a + b;
};

// inside of the functions ts won't see the login
// because we can return a - b also because it returns
// number

// inference
// using the return ts has says what type of Types
// this function will return
const add1 = (a: number, b: number) => {
  return a + b;
};

// returns void so always use return in functions
const sub = (a: number, b: number) => {
  a - b;
};

// anonymous functions
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void can return null and undefined but not other types
const logger = (message: string): void => {
  console.log(message);

  return undefined;
};

// never we will exit the function in the middle
// and throw some error

const throwError = (message: string): never => {
  throw new Error(message);
};

// we are going to use the above when a function
// that return  nothing but error if not we can do the
// below

const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

// destructing

const forecast = {
  date: new Date(),
  weather: 'Sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);

// destructure

const logWeather1 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather1(forecast);
