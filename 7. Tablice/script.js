//Zad 1

    const tab = ["Bartek", "ma", "długopis"];
    console.log( tab[0] ); 
    console.log( tab[1] ); 
    console.log( tab[2] );     

//Zad 2 

    const tab = ["Bartek", "ma", "długopis", 3, 5];
    console.log( tab[0] ); 
    console.log( tab[1] ); 

console.log(tab[tab.length - 1]);
        
for(let i=0;i<tab.length;i++)
    {
        console.log(tab[i]);
    }
for(let i=0;i<tab.length;i+=2)
    {
        console.log(tab[i]);
    }

tab.forEach(el => {
    if(typeof(el) === 'string'){
        console.log(el);
    }
});

tab.forEach(el => {
    if(typeof(el) === 'number'){
        console.log(el);
    }
});

//Zad 3 

const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
//1
const sum = t2.reduce((acc, number) => (acc + number));
console.log(sum)
//2
const dif = t2.reduce((acc, number) => (acc - number));
console.log(dif)
//3

const avg = sum / t2.length;
console.log(avg);

//4
t2.forEach((el) => {
	if (el % 2 === 0) {
		console.log(el);
	}
});

//5
t2.forEach((el) => {
	if (el % 2 !== 0) {
		console.log(el);
	}
});
//6
const result = t2.sort((a,b) => a - b);
console.log('max:', result[result.length - 1])

//7
t2.sort((a,b ) => b - a );
console.log('min', result[result.length - 1])

//8
t2.reverse().forEach(el => console.log(el))

//Zad 4

const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
const func = tab => tab.reduce((a,b)=>a+b);
console.log(func(t2));

//Zad 5

const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
function A(tab){
    const sum = tab.reduce((a,b)=>a+b);
    const avg = sum / tab.length;
    const result = tab.map(el => console.log(el * avg))
}

A(t2)

//Zad 6

const t2 = [1, 2, 3, 4, 5, 22, 33, 44];

function x(tab){
    const avg = tab.reduce((a,b)=> a+b) / tab.length ;
    console.log(avg)
}

x(t2);

//Zad 7

const toSortArray = [9, 2, 22, 5, 7, 4];

const sortTab = toSortArray.sort((a, b) => a - b);
console.log(sortTab);

//Zad 8

const toSumArrayA = [2, 3, 2]
const toSumArrayB = [1, 4, 3]

function sumArraysValue(arrayA, arrayB) {
    let newArray = [];

    arrayA.forEach((num1, i) => {
        newArray.push(num1 + arrayB[i]);
    });

    return newArray;
}

console.log(sumArraysValue(toSumArrayA, toSumArrayB));

//Zad 9

const numbers2 = [-2, 5, -1, -23, 64];

function changeElement(arr) {
    return arr.map(n => n *= -1); 
}

console.log(changeElement(numbers2));
