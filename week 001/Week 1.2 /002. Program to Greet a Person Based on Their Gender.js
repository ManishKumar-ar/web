function greetByGender(name, gender) {
    if (gender.toLowerCase() === 'male') {
        console.log("Hello, Mr. " + name + "!");
    } else if (gender.toLowerCase() === 'female') {
        console.log("Hello, Ms. " + name + "!");
    } else {
        console.log("Hello, " + name + "!");
    }
}

// Example usage:
greetByGender("Manish", "male");
greetByGender("Priya", "female");
greetByGender("Alex", "other");


//output
Hello, Mr. Manish!
Hello, Ms. Priya!
Hello, Alex!
