function FindIntersection(strArr) {

    let arr1 = strArr[0].split(",");
    let arr2 = strArr[1].split(",");
  
    let res = "";
  
    // console.log(arr1, arr2, res);
  
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
      return res;
    }
    else {
      return false;
    }
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));