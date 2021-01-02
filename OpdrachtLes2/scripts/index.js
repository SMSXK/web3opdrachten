//opdracht foreach
let arr = [0, 5, 10, 18, 30];
console.log("opdracht foreach");
arr.forEach(((value, index) => console.log((value))));

//opdracht map
let arrMap = arr.map(((value, index) => {return value * 5}));
console.log("map");
console.log(arrMap);

//opdracht filter
isGroter = (number) => {return number > 30};
let arrFilter = arrMap.filter(isGroter);
console.log("opdracht filter");
console.log(arrFilter);

//opdracht reduce
let arrReduce1 = arrMap.reduce((acc, value, i) => {return acc + value;});
console.log("opdracht reduce a");
console.log(arrReduce1);

//opdracht reduce met check
let arrReduce2 = arrMap.reduce((acc, value, i) => {
    let result = 0;
    if (value % 2 === 0)
        result = acc + value
    return result;});
console.log("opdracht reduce b");
console.log(arrReduce2);

//opdracht spread operator array
let arr2 = [54,68];
arr = [...arr, ... arr2];
console.log("opdracht spread array");
console.log(arr);

//opdracht spread operator object
let obj1 = {
    voornaam: 'Ivan' ,
    achternaam: 'Ivonovish' ,
    leeftijd: 30
};
console.log("opdracht spread object");
console.log(obj1);
let obj2 = {...obj1, geboorteplaats: 'Moscou'};
console.log(obj2);

//opdracht destructuring
const  {voornaam} = obj1;
console.log("opdracht destructuring");
console.log(voornaam);

