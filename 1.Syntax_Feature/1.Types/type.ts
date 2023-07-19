const today = new Date();
today.getMonth();
// above knowns the properties of above value
// using internal referance
// today. - shows us the property like get month so on
// of date property

const person = {
  age: 20,
};

// above person object has property age if we refer
// property other than that it show us an error

class Color {}

const red = new Color();

// the red will refer to the Color class property
// red will through us error if we refer property
// that are not in Color
// right now there is no property

// if we have property both red and person will have
// auto complete properties values
