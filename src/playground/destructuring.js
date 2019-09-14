const person = {
    name: undefined,
    age: 26,
    location: {
        city: "Philadelphia",
        temp: 92
    }
};

// const {name: firstname = "Anonymous", age} = person;
// console.log(`${firstname} is ${age}`);
// const {city, temp: temperature} = person.location;
// console.log(`It's ${temperature} in ${city}`);

const address = [
    "1299 S Juniper Street",
    "Philadelphia",
    "Pennsylvania",
    "19147"
];

const [, city, state = "New York"] = address;

console.log(`You are in ${city} ${state}.`);