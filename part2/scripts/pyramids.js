function pyramid(number){
    const pyramid = [];

    for (let i = 0; i < number; i++) {
        let str1 = ' '.repeat(number - i - 1); 
        let str2 = '@'.repeat(i * 2 + 1); 
        pyramid.push(str1 + str2 +str1);

    }
    return pyramid
}
const result = pyramid(5);
result.forEach(level => console.log(level))