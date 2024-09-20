// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty('property'):", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
}

// Example Usage for Object Methods
const sampleObject = {
  name: "manish",
  age: 25,
  college: "Raffles",
};

objectMethods(sampleObject);

//output
Original Object: { name: 'manish', age: 25, college: 'Raffles' }
After Object.keys(): [ 'name', 'age', 'college' ]
After Object.values(): [ 'manish', 25, 'Raffles' ]
After Object.entries(): [ [ 'name', 'manish' ], [ 'age', 25 ], [ 'college', 'Raffles' ] ]
After hasOwnProperty('property'): false
After Object.assign(): { name: 'manish', age: 25, college: 'Raffles', newProperty: 'newValue' }
