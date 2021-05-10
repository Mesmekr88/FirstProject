const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false
};
////////////////////////////////////////////////////////////////////////////////

                            // ПЕРВЫЙ ВАРИАНТ

// for (let index = 0; index < 2; index++) {
//     const   a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//     if(a.length<=0||a.length>50||b.length<=0||b.length>50){
//         index--;
//         continue;
//     }
//     personalMovieDB.movies[a]=b;
    
// };



                            // ВТОРОЙ ВАРИАНТ

// do{
//     let a = prompt('Один из последних просмотренных фильмов?', '');
//     let b = prompt('На сколько оцените его?', '');
//     if (a.length>0&&a.length<50&&b.length>0&&b.length<50)
//     {
//         personalMovieDB.movies[a]=b;
//     }
// } while (a.length<0||a.length>50||b.length<0||b.length>50||Object.keys(personalMovieDB.movies).length<2)

// console.log(personalMovieDB);
// console.log(Object.keys(personalMovieDB.movies).length);

                            // Третий ВАРИАНТ

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
    
//     if(a!=null&&b!=null&&a!=''&&b!=''&&a.length<50&&b.length<50)
//     {
//         personalMovieDB.movies[a]=b;
//         console.log('done');
//     }
//     else{
//         console.log('error');
//         i--;
//     }
// }

////////////////////////////////////////////////////////////////////////////////

if (personalMovieDB.count <10)
{
    console.log('Просмотрено довольно мало фильмов')
}
else if(personalMovieDB.count >=10 && personalMovieDB.count<30)
{
    console.log('Вы классический зритель')
}
else if(personalMovieDB.count>=30){
    console.log('Вы киноман!')
}
else{
    console.log('Произошла Ошибка')
};