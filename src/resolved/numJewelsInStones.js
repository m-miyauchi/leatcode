/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function(J, S) {
  // Jを一文字ずつバラして1文字、完全一致、またはの正規表現生成
  const stringLengh = J.length;
  let regString = '';
  let result = 0;

  // 1文字ずつの配列生成
  for (let index = 0; index < stringLengh; index++) {
    regString += `${J.charAt(index)}`;
    if (index !== stringLengh - 1)  regString += '|';
  }

  const matchNum = S.match(new RegExp(regString, 'g'));
  if (matchNum !== null) {
    result = matchNum.length
  }

  return result;
};

const J = 'z';
const S = 'ZZ';

const result = numJewelsInStones(J, S);