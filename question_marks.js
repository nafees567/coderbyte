/*
Question Marks
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

Examples
Input: "aa6?9"
Output: false
Input: "acc?7??sss?3rr1??????5"
Output: true
*/

function QuestionsMarks(str) { 

    // code goes here  
    // return str;
    let countQ = 0;
    let num1 = 0;
    let isNum1found = false;
    let isNum2found = false;
  
    for ( let i = 0; i < str.length; i++ ) {
      // console.log("Round: ", i);
      if (/[0-9]/.test(str[i])) {
        if (!isNum1found) {
          num1 = str[i];
          isNum1found = true;
        } else {
          isNum2found = true;
          if (countQ >= 3) {
            countQ = 0;
            isNum2found = isNum2found = false;
            return true;
          }
        }
      }
  
      if (isNum1found == true && isNum2found == false && /\?/.test(str[i])) {
        countQ++;
      }
    }
    return false;
  
  }
     
  // keep this function call here 
  console.log(QuestionsMarks(readline()));