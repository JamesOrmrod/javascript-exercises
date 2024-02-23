const findTheOldest = function(people) {
    people.forEach(person => person.age = calcAge(person));
        
    people.sort((a, b) => b.age - a.age);
    
    return people[0];
};

// const findTheOldest = function(people) {
//     let oldestPerson = {};
//     people.reduce((oldestPerson, person) => {
//         if (oldestPerson === undefined) {
//             oldestPerson = person;
//         } else if (calcAge(person) > calcAge(oldestPerson)) {
//             oldestPerson = person;
//         }
//     });
//     return oldestPerson;
// };


function calcAge(person) {
    if (person.yearOfDeath == undefined) {
        return 2024 - person.yearOfBirth;
    } else {
        return person.yearOfDeath - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
