const findTheOldest = function(arr) {
    let result = {};
    let max = 0;
    let age;
    const currentYear = new Date().getFullYear();
    arr.forEach(elem => {
        if(!elem.yearOfDeath)
            age = currentYear - elem.yearOfBirth;
        else
            age = elem.yearOfDeath - elem.yearOfBirth;

        if(age > max) {
            max = age;
            result = elem;
        }
    });

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
