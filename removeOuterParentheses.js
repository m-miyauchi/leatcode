/**
 * @param {string} S
 * @return {string}
 */

// 未解決
var removeOuterParentheses = function(S) {
    const myRe = /^\(\)$/g;
    let res = '';

    const arr = S.match(myRe);
    const count = arr.length;

    console.log(count);
    console.log(S.length)

    if (S.length !== count * 2) {
      for (let index = 0; index < count; index++) {
        res += '()';
      }
    }
  return res;
};

const res = removeOuterParentheses('()()');
console.log(res);