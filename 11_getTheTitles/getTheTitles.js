const getTheTitles = function(arr) {
    return arr.reduce((titles, item) => {
        return [...titles, item.title];
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
