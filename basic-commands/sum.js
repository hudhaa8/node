// const n1=process.argv[2];
// const n2=process.argv[3];

// const sum = (n1,n2) => n1+n2;
// console.log(process.argv)
// console.log(sum(+n1,+n2))

const n1= +process.argv[2];
const n2= +process.argv[3];
// parseInt - string to number
const sum = (n1,n2) => n1+n2;
console.log(process.argv)
console.log(sum(n1,n2))