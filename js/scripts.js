const students = ['Paolo', 'Giulia', 'Marco'];

students.forEach((singoloElemento, i, arr) => {
    console.log(singoloElemento, i, arr);
    console.log(this);
    // console.log(arr[i], i, arr);
    // console.log(students[i], i, students);
});

// students.forEach(function (singoloElemento, i, arr) {
//     console.log(singoloElemento, i, arr);
//     console.log(this);
//     // console.log(arr[i], i, arr);
//     // console.log(students[i], i, students);
// });

for (let i = 0; i < students.length; i++) {
    console.log(students[i], i, students);
    console.log(this);
}

/* 
    ------------------------------------------------------------
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* MAP */
// Crea un nuovo array contenente i quadrati dei numeri presenti in numbers
const squares = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const square = element * element;
    // const square = element**2;

    console.log(element, '=>', square);
    
    squares.push(square);
}

console.log(squares);


const squaresWithMap = numbers.map((element) => {
    const square = element * element;
    console.log(element, '=>', square);

    return square;
});

console.log(squaresWithMap);

const people = [
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
];

const peopleFreelance = people.map((person) => {
    person.freelance = true;

    return person;
});

console.log(peopleFreelance);

/* FILTER */
// Crea un nuovo array contenente solo i numeri pari di numbersTwo
const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = [];

numbersTwo.forEach((element) => {
    if (element % 2 == 0) {
        evens.push(element);
    }
    // else {
    //     Non pusharlo
    // }
});

console.log(evens);

const evensWithFilter = numbersTwo.filter((gino) => {
    if (gino % 2 == 0) {
        return true;
    } 
    else {
        return false;
    }

    // OPPURE

    // return (gino % 2 == 0);
});

// OPPURE

// const evensWithFilter = numbersTwo.filter((element) => (element % 2 == 0));

console.log(evensWithFilter);