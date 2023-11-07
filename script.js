let user = {
    fullName : "Emmanuel Edet",
    location : "7, Barikisu iyede street, Onike, Yaba",
    age : 15,

}


let user1 = {
    fullName: "Adetola",
    location: "Unknown",
    age: 17,
}


console.log(user.fullName);

const number = 20%3;
console.log(number);

const orange = 7;
const pear = 8;

if (orange > pear){
    console.log(`There are more oranges than pear in the basket`)
}
else if(orange == pear){
    console.log(`There are equal number of oranges and pears`)
}
else{
    console.log(`There are more pears than oranges`)
}
    
console.log(user1);

if (user1.age > user.age){
    console.log (`${user1.fullName} who is ${user1.age} is older than ${user.fullName} who is ${user.age}`);
}
else{
    console.log (`${user.fullName} who is ${user.age} is older than ${user1.fullName} who is ${user1.age}`)
}