/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  const morseArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const [first, last] = ['a', 'z'];
  const wordArrayLength = words.length;
  let mappedObj = {};
  let morseWordsArray = [];
  let counter = 0;
  let result = 0;

  if (wordArrayLength === 0) {
    return result;
  } else {
    for(let i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
      mappedObj[morseArray[counter]] = String.fromCharCode(i);
      counter++;
    }  
    // ここでマッピング
    const alphabetTransformToMorseString = (mappedObj, word) => {
      const wordLength = word.length;
      let morseWord = '';
      const objLength = Object.keys(mappedObj).length;
  
      const mapAlphabetToMorse = (alphabet) => {
        for (const key in mappedObj) {
          if (mappedObj[key] === alphabet) {
            return key;
          }
        }
      };
  
      for (let index = 0; index < wordLength; index++) {
        morseWord += mapAlphabetToMorse(word.charAt(index));
      }
  
      return morseWord;
    };
  
    // ここで配列の文字列をモールス信号に変換
    for (let index = 0; index < wordArrayLength; index++) {
      morseWordsArray.push(alphabetTransformToMorseString(mappedObj, words[index]));
    }
  
    console.log(morseWordsArray);
  
    const calcDifferentPattern = (morseWordsArray) => {
      const arrayLength = morseWordsArray.length;
      const differentWords = [];
      differentWords.push(morseWordsArray[0]);

      for (let i = 1; i <  arrayLength; i++) {
        if(morseWordsArray[0] !== morseWordsArray[i]) {
          console.log('異なる要素');
          let counter = 1;
          for (let j = 0; j < differentWords.length; j++) {
            // あとここの処理
            if (differentWords[j] !== morseWordsArray[i]) {
              console.log('入りました1');
              counter++;
            }
          }
          console.log(counter);
          console.log(morseWordsArray.length);
          if (counter ===  morseWordsArray.length) {
            console.log('入りました2');
            differentWords.push(morseWordsArray[i]);
          }

        }
      }
     // 必ず1パターンはある
     console.log(differentWords);

     return differentWords.length;

    };
  
    if (morseWordsArray.length === 1) {
      result = 1;
    } else {
      result = calcDifferentPattern(morseWordsArray);
    }
    console.log(result);
    return result;
  }
};

// const words = ["gin", "zen", "gig", "msg"];
//const words = ["a"];
// const words = ["rwjje","aittjje","auyyn","lqtktn","lmjwn"];
const words = ["cbrl","cdfl","wvtj","wvkm","anuyt"];

uniqueMorseRepresentations(words);