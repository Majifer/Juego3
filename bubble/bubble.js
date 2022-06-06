let array = [6,10,30,40,70,,240,360,720]

function BubbleSortNumbers(array) {
   let length = array.length
   
   for(let i = 0; i< length; i++){
       for(let j = 0; j< length; j++){
           if(array[j] > array[j + 1]){
               let temp = array[j]
               array[j] =  array [j+1]
               array[i+1] = temp;
            }
        }
        console.log(`iteration $(S+1):`, array)
    }
   return array
}
console.log(BubbleSortNumbers(array));

function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));


//Creacion de un array de 8 numeros

var arr = [];
while(arr.length < 10){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);