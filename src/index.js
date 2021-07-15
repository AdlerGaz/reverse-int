module.exports = function reverse(n) {

    let temp = (Math.abs(n)).toString().split('');
    let result = '';
    for (let i = temp.length - 1; i >= 0; i--) {
        result += temp[i];
    }
    return +result;
}
