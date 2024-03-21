// tim 2 so cong lai co tong bang target

// const nums = [2,7,11,15]; 
// const target = 13;

// const findSum=(nums,target) => {
//   for (let i = 0; i < nums.length; i ++){
//     for (let j = i + 1; j < nums.length ; j++) {
//             if(nums[i] + nums[j] === target){
//               return [i,j]
//             }
//           }
//         }
//         return[];
// }
// console.log(findSum(nums,target));

//tinh tong 2 so
// const l1 = [2,4,3]; 
// const l2 = [5,6,4];


// function addTwoNumbers(l1,l2) {
//   if( !l1 || !l2) return;
//   const a = l1.join("");
//   const b = l2.reverse().join("");
//   const c = Number(a) + Number(b)
//   const d = String(c)
//   const e = d.split("")
//   const f = e.reverse()
//   const g = f.map(item => Number(item))
//   const i = g.reverse()
//   return i
// }
// console.log(addTwoNumbers(l1,l2));


//kiem tra so doi xung
const number = 10021;


function isPalindrome (number) {
  if (number < 0) return false;
  const valueArray = String(number).split("");
  const lengthArray = valueArray.length;
  for(let i = 0; i < valueArray.length; i++){
      if(Number(valueArray[i]) !== Number(valueArray[lengthArray - 1 - i])) {return false}
  }
  return true
}
console.log(isPalindrome(number));
