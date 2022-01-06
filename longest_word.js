/*
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
*/

function LongestWord(sen) { 

    // code goes here
    let arr = sen.split(" ");
    let largest = "";
  
    // for ( let i = 0; i < arr.length; i++ ) {
    // //   arr[i] = arr[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    //   arr[i] = arr[i].replace(/[^\w\s]|_/g, "");
    //   if (arr[i].length > largest.length) {
    //     largest = arr[i];
    //   }
    // }

    arr = arr.map((str) => str.replace(/[^\w]|_/g, ""));
    arr.map((str) => {
      if (str.length > largest.length) {
        largest = str;
      }
    })
  
    return largest;
}