/*
Find Intersection

Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

function FindIntersection(strArr) {
  // strArr = strArr.replace(/\s/g, '')

  let arr1 = strArr[0].split(",");
  arr1 = arr1.map((value) => value.trim());
  let arr2 = strArr[1].split(",");
  arr2 = arr2.map((value) => value.trim());

  let res = "";

  // console.log(arr1, arr1.length, arr2, arr2.length, res);

  for ( let i = 0; i < arr1.length; i++ ) {
    if (arr2.includes(arr1[i])) {
      if (res) {
        // console.log("Before", res);
        res = res+","+arr1[i];
        // console.log("After", res);
      } else {
        // console.log("Before", res);
        res = res+arr1[i];
        // console.log("After", res);
      }
    }
  }

  for ( let j = 0; j < arr2.length; j += 3) {
    if (arr1.includes(arr2[j]) && !res.includes(arr2[j])) {
      if (res) {
        // console.log("Before", res);
        res = res+","+arr2[j];
        // console.log("After", res);
      } else {
        // console.log("Before", res);
        res = res+arr2[j];
        // console.log("After", res);
      }
    }
  }

  if (res) {
    res = res.replace(/\s/g, '')
    return res;
  }
  else {
    return false;
  }

}
   
// keep this function call here 
console.log(FindIntersection(readline()));


  
  /*
  For input ["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"] the output was incorrect. The correct output is 5,6,11
  For input ["2, 3, 4", "3"] the output was incorrect. The correct output is 3
  For input ["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"] the output was incorrect. The correct output is 2,4
  */