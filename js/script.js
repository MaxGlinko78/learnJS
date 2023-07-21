 "use strict";

//Less = 006

// let number = 4.6

// console.log(-4/0);

// const persone = "Alex";

// const obj ={
//   name : 'Alex',
//   age: 34,
//   isMarried: true,
// };

// console.log(obj.name);

// let arr = ['plum.png', 'orange.jpg', 6, 'aplle.bmp',{
//   name : 'Alex',
//   age: 34,
//   isMarried: true,
// },[1,2,3,4,5,66] ];

// console.log(arr);


//Less = 007

// alert("Hello");

// const result = confirm('Are you sure you want to?');

// console.log(result);

// const answer = prompt('Are you 18th or mote ?');
// console.log(answer);


//let data = curl --location --request GET 'http://194.126.203.180:10158/v1_00/RoomStatus' --header 'API-TOKEN: 5ff5f689-1a11-48b8-ab88-645f236528da'

// const numberOfFilms = prompt('Сколько фильмов вы посмотрели ?');

// lessons - 13

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies :{},
//   actors:{},
//   ganers:[],
//   privat: false,
// }

// const a = prompt('Один из последних фильмов',''),
//       b = prompt('На сколько оцените его ?',''),
//       c = prompt('Один из последних фильмов',''),
//       d = prompt('На сколько оцените его ?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// // personalMovieDB.movies = prompt('Один из последних фильмов');
// // personalMovieDB.movies = prompt('На сколько оцените его ?');
// //
//  console.log(personalMovieDB);

// lessons - 14


// let num = 50;

// while (num < 55) {
//   console.log(num);
//   num++;
// }


// do {
//   console.log(num);
//   num++; }
//   while (num <= 55);


// for(let i =1; i < 10; i++) {
// if(i === 6){
//   //break;
//   continue;
// }


//   console.log(i);

// };

// lesson 15
// const numberOfFilms = prompt('Сколько фильмов вы посмотрели ?');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies :{},
//   actors:{},
//   ganers:[],
//   privat: false,
// }




// for(let i= 0; i<2; i++){
//    const a = prompt('Один из последних фильмов',''),
//        b = prompt('На сколько оцените его ?','');
//        if (a != null && b != null && a !='' && b !='' && a.length < 50){
//           personalMovieDB.movies[a] = b;
//           console.log('Done');
//        } else {
//         console.log('Error');
//         i--;
//       }

// }


// if (personalMovieDB.count < 10 ){
//   console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//     console.log('Вы классический зритель');
// }
//  else if (personalMovieDB.count > 30){
//     console.log('Вы киноман');
// } else{
//    console.log('Произошла ошибка');
// }

// console.log(personalMovieDB)


// lesson 16 
let num = 20;

function showFirstMessage(text) {
console.log(text);
let num = 10;
  
}

showFirstMessage("First Message");
console.log(num);