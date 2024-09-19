function printMaleNames(people) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].gender === 'male') {
            console.log(people[i].firstName);
        }
    }
}


let people = [
    { firstName: "John", lastName: "Doe", gender: "male" },
    { firstName: "Jane", lastName: "Smith", gender: "female" },
    { firstName: "Mike", lastName: "Brown", gender: "male" },
    { firstName: "Emily", lastName: "White", gender: "female" }
];
printMaleNames(people);



//output
John
Mike
