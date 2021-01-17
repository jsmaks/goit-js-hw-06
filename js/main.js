
import users from "./users.js"

const getUserNames = users => {
    const names = users.map(function (user) {
        return user.name
    })
    return names;
};
// const names = users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = (users, color) => users
    .filter(user => user.eyeColor === color)

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (users, gender) => users
    .filter(user => user.gender === gender)
    .map(user => user.name)

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = users => {
    const activeUsers = users.filter(user => !user.isActive);
    return activeUsers;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


const getUserWithEmail = (users, email) => {
    const emailUser = users.find(user => user.email === email)
    return emailUser;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => {
    const userAge = users.filter(user => user.age >= min && user.age <= max)
    return userAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]



const calculateTotalBalance = users => {
    const total = users.reduce((sum, user) => sum + user.balance, 0)
    return total;
};
console.log(calculateTotalBalance(users)); // 20916



const getUsersWithFriend = (users, friendName) => {

    const names = users
        .filter(user => user.friends.includes(friendName))
        .map(user => user.name)
    return names;

}

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]



const getNamesSortedByFriendsCount = users => {
    const sortNames = users
        .sort((prev, next) => (prev.friends.length - next.friends.length))
        .map(item => item.name);
    return sortNames;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = users => {
    const skills = users.flatMap(user => user.skills)
        .filter((item, index, arr) => arr.indexOf(item) === index)
        .sort();

    return skills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]