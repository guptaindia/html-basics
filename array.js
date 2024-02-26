const arr = ['nice', 45, 85, null, true,undefined];
console.log(typeof arr);
console.log(arr);
console.log(Array.isArray(arr));

const movies = ['salaar', 'Animal', 'Wonka', 'Avataar', 'Arrow', 'PeaceMaker'];

console.log(movies.length);
console.log('knife'.length);

//indexing 
console.log(movies[2]); //also works for string 
console.log(movies.indexOf('PeaceMaker'));
console.log(movies.at(-4)); //also works for string

//round brackets can be used for neg or pos values
//[] can  be used to assign values

movies[3] = 'batman';
console.log(movies);
console.log(movies[20]);

//slicing
const s = 'abc';
console.log(movies. slice(1,4)); //also works for strings
console.log(movies. slice(1,20));
console.log(movies.slice(3));
console.log(movies.slice(-2));

//modifying arrays
movies.push('Flashpoint');
console.log(movies);
movies.unshift('deadpool');
console.log(movies);

movies.pop();
console.log(movies);
movies.shift();
console.log(movies);

//inserting and replcaing elements splice
movies.splice(3,2); //removes 2 elements starting from index 2
console.log(movies);
//movies.splice(1); // removes all elements after 1 index
//console.log(movies);
movies.splice(2,2, 'deadpool', 'homecoming');
console.log(movies);
console.log(movies.splice(2,2)); //print the removing elements
