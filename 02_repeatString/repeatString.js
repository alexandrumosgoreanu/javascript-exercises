const repeatString = function(string, num) {
    let result = "";
    let i;
    if(num < 0)
        result = "ERROR";
    else
        for(i = 1; i <= num; i++)
            result = result + string;

    return result;
};

// Do not edit below this line
module.exports = repeatString;
