"use strict";
// Can't be used to create an object directly
// const sorter = new Sorter(numbersCollection) -> this can't be created
// Only used as a parent class
// -> Used for inheritance purpose to use methods
// Can contain real implementation for some methods
// The implemented methods can refer to other methods that don't
// actually exist yet (we still have to provide names and types for the un-implemented
// methods)
// Can make child classes promise to implement some other method
