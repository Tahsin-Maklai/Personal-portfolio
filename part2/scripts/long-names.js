const names = ['jane', 'alexander', 'tahsinmaklai', 'christopher'];
const newStr = [];

function filterNames(namesArray) {
    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i].length > 12) {
            newStr.push(namesArray[i]);
        }
    }
}

filterNames(names);
console.log(newStr);



