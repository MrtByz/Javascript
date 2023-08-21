function ThirdGreatest(strArr) { 
  
    let strs = [];
    for(let i=0;i<strArr.length;i++){
      let strObj = {str: "", len: 0};
      strObj.str = strArr[i]
      strObj.len = strArr[i].length
      strs.push(strObj);
    }
    
    strs = strs.sort((a,b) => (a.len > b.len) ? -1 : (b.len > a.len) ? 1:0)
    return strs[2].str; 
  
  }



  function PermutationStep(num) { 
    let tempNum = num;
    let inputArr = [];
    while (num != 0){
      inputArr.push(num%10)
      num = Math.floor(num / 10)
    }
    inputArr = inputArr.reverse()
    let result = [];
  
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
   permute(inputArr)
    let numbers = [];
    for (let i=0;i<result.length;i++){
      let sayi = 0
      for(let j=result[i].length-1;j>=0;j--){
        sayi = sayi + Number(result[i][j]) * (10**j)
      }
      numbers.push(sayi)
    }
    numbers = numbers.sort()
    let next = -1;
    for(let i=0;i<numbers.length;i++){
      if(Number(numbers[i]) > Number(tempNum)){
        next = numbers[i];
        break;
      }
    }
  
    return next; 
  
  }





