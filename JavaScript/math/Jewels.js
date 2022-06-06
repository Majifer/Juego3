//771. Jewels and Stones


const arrayFull = [1,2,3,4,5,6,7,8,9]


var numJewelsInStones(string jewels, string stones) {
    const JewelsArray = jewels.split ("");
    const stonesArray = stones.split ("");
    const jewelsResults = stonesArray.reduce(function(counter,stone)){
          if(JewelsArray.includes(stone)){
             return counter +1;
           }
           else{
             return counter;
           }
    }0;
   return jewelsResults;
}
