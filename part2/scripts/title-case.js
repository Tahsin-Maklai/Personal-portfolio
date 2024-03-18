function title(string){
    const words = string.split(" ");

    for (let i = 0; i< words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");



}

const orgString = "my name is tahsin"
console.log(orgString)
const result = title(orgString)
console.log(result)

