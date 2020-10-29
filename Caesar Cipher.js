function rot13(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (/[^a-z]/i.test(str[i])) {
            result.push(str[i]);
        }
        else if (str.charCodeAt(i) + 13 <= 90) {
            result.push(String.fromCharCode(str.charCodeAt(i) + 13));
        }
        else {
            result.push(String.fromCharCode(str.charCodeAt(i) - 13));
        }
    }
    return result.join('');

}


