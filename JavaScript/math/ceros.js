const array1=[2,4,6,8,10,11,21,44,194,384,964]
const filteredArray=array1.filter(x=>x%2===0);
console.log(filteredArray);

const array2=[2,4,6,8,10,11,21,44,194,384,964]
const filteredArray2=array2.filter(x=>x%2!==0);
console.log(filteredArray2);

const concatenacion = filteredArray.concat(filteredArray2);
console.log(concatenacion);
alert("Se han concatenado todos los elementos juntados en el ultimo Array");

const array3 =[1, 2, 3, 4, 5].reduce((previousValue, currentValue) => previousValue + currentValue, -15 );
console.log(array3);

const array4 =[900, 15, 34, 3, 84]
function compareNumber(a,b){
    return a-b;
}
console.log('original array without changes', array4.join);

console.log('original array with order', array4.sort);

console.log('original array order with function', array4.sort(compareNumber));


var numArray = [140000, 104, 99];
numArray = numArray.sort();
console.log(numArray)








function Elevar(f,numero){
    let result = [] 
    let i
    for(i=0; i!= a.length; i++){
        result[i] = factor(a[i]);
      return result;
    }
     const f = function(x){

        return x*x*x;
    }
    let numbers =[1,0,3,9,6,2];
    let quad = map(f, numbers);
    console.log(quad);
}