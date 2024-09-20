 XML (eXtensible Markup Language) was widely used for data exchange.
	 XML is similar to HTML but is used primarily for describing data. 
	 it could describe hierarchical data, and it was both human-readable and machine-readable.
	 example --- 
	 
	    <person>
        <name>Alice</name>
        <age>25</age>
        <isStudent>true</isStudent>
     </person>
	 

disadvantage ==>
	XML wasn’t natively integrated into JavaScript, which meant developers needed to write additional code to convert XML into JavaScript objects.




JSON ===>
	a JavaScript developer, recognized the need for a simpler data interchange format. 
	 He looked at JavaScript’s built-in object notation and realized that a subset of JavaScript’s object structure could be a universal data format for the web.
	 JSON represents data in key-value pairs.
	 Many programming languages (Python, Java, C++, etc.) have built-in support for parsing and generating JSON data.


JSON Structure ====>
	JSON uses key-value pairs, where:
  Keys are always strings enclosed in double quotes.
	Values can be strings, numbers, objects, arrays, true, false, or null.


Methods for Working with JSON in JavaScript ===>
		JavaScript provides two main methods for working with JSON:

JSON.stringify(): Converts a JavaScript object into a JSON string.
JSON.parse(): Converts a JSON string back into a JavaScript object.









// JavaScript object
const person = {
  name: "Alice",
  age: 25,
  isStudent: true
};

// Convert JavaScript object to JSON
const jsonString = JSON.stringify(person);
console.log(jsonString);  // Output: {"name":"Alice","age":25,"isStudent":true}

// Convert JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name);  // Output: Alice


//output
{"name":"Alice","age":25,"isStudent":true}
Alice
		
		

	
		
		
