// var arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     console.log(val + " use");
// })

// var arr = [1,2,3,4,5,6,7,8,9];
// var x = arr.map(function(val){
//     return val;
// })
// console.log(x);

// var a  = [1,2,34,5,6,8,10];
// var y = a.filter(function(val){
//     if(val==2){
//         return true;
//     }
//     else {
//         return false;
//     }

// });
// console.log(y);

// var ar1  = [1,2,34,5,6,8,10];
// var ary = ar1.filter(function(val){
//     if(val>=2){
//         return true;
//     }
//     else {
//         return false;
//     }

// });
// console.log(ary);


// var x = {
//     name: "harsh",
//     age : 1,
//     address : "jorpati",
// }
// console.log(x.age);
// console.log(x.name);
// console.log(x['address']);

//  function add(){
//    return 2+3;
// }
// var x = add();
// console.log(`The sum is ${x}`);

async function abcd(){
   var blob = await fetch(`https://randomuser.me/api/`);
   var ans = await blob.json();
//    console.log(ans);
     console.log(ans.results[0].name);
     console.log(ans.results[0].gender);
}

abcd();

