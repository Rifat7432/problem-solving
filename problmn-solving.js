// 1.Task: Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const people = [
  {
    name: "John Doe",
    age: 30,
    gender: "Male",
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "Female",
  },
  {
    name: "Alex Johnson",
    age: 40,
    gender: "Male",
  },
  {
    name: "Maria Garcia",
    age: 35,
    gender: "Female",
  },
];
const filterMen = (peoples) => {
  const peoplesWithoutFemales = peoples.filter(
    (people) => people.gender !== "Female"
  );
  const result = peoplesWithoutFemales.map(
    (peoplesWithoutFemale) => peoplesWithoutFemale.name
  );
  return result;
};

const allMaleNames = filterMen(people);
// console.log(allMaleNames);

// 2. Task: Object Manipulation
// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
  },
];

const allBookNames = (books) => {
  const booksName = books.map((book) => book.title);
  return booksName;
};

const booksNames = allBookNames(books);
// console.log(booksNames);

// 3. Task: Function Composition
// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const squares = (num) => {
  return num * num;
};
const double = (num) => {
  return num * 2;
};
const addFive = (num) => {
  return num + 5;
};
const allInOne = (number) => {
  const squaresNumber = squares(number);
  const doubleNumber = double(squaresNumber);
  const addFiveNumber = addFive(doubleNumber);
  return addFiveNumber;
};

const num = allInOne(2);
// console.log(num);

// 4. Task: Sorting Objects
// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "F-150", year: 2021 },
  { make: "Chevrolet", model: "Malibu", year: 2018 },
  { make: "BMW", model: "X5", year: 2022 },
];

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

const sortCars = sortCarsByYear(cars);
// console.log(sortCars);

// 5. Task: Find And Modify
// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const findAndUpdate = (peoples, name, newAge) => {
  const person = peoples.find((element) =>
    element.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  const people = peoples.map((element) => {
    if (element.name === person.name) {
      element.age = newAge;
      return element;
    }
    return element;
  });
  return people;
};
const printUpdatePeople = findAndUpdate(people, "jo", 27);
// console.log(printUpdatePeople);

// 6. Task: Array Reduction
// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const array1 = [1, 2, 3, 4, 34, 65, 67, 78, 23, 33,1,3,4, 32];
const sumAllEven = (array) => {
  return array.reduce((accumulator, currentValue) => {
    const isEven = currentValue % 2 === 0;

    if (isEven) {
      return accumulator + currentValue;
    }
    return accumulator;
  }, 0);
};

const sumWithInitial = sumAllEven(array1);

// console.log(sumWithInitial);



// 8. Task: Unique Values
// Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

const removeDuplicates = (arr) =>{ 
 return arr.filter((item, index, array) =>{
     array.indexOf(item) === index})
}
const uniqueNum = removeDuplicates(array1)
console.log(uniqueNum)

