// == loose equality operator 
// === strict equility operator

let check = 1 == '1'; // output will come true but output is supposed to be false. (here it fails)

let sum = 1 === '1'; // here output will be false because we are comparing interger with string.(it gives the correct output)
console.log(sum);