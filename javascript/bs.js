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

// function start() {
//   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//   while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//   }
// }

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//       if (
//         a != null &&
//         b != null &&
//         a != "" &&
//         b != "" &&
//         a.length < 50 &&
//         b.length < 50
//       ) {
//         personalMovieDB.movies[a] = b;
//         console.log("done");
//       } else {
//         console.log("error");
//         i--;
//       }
//     }
//   }

//   function showMyDB(hidden) {
//     if (!hidden) {
//       console.log(personalMovieDB);
//     }
//   }

//   function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//       let answer = prompt(`Ваш любимый жанр под номером ${i}`, "");
//       if (answer.length >= 0 || answer.length <= 50) {
//         personalMovieDB.genres.push(answer);
//       } else {
//         i--;
//       }
//     }
//   }

//   function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//       console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//       console.log("Вы киноман!");
//     } else {
//       console.log("Произошла Ошибка");
//     }
//   }

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (this.count == "" || this.count == null || isNaN(this.count)) {
      this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

      if (
        a != null &&
        b != null &&
        a != "" &&
        b != "" &&
        a.length < 50 &&
        b.length < 50
      ) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  ShowMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let answer = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (
        answer != null &&
        answer.length > 0 &&
        answer.length <= 50 &&
        answer != ""
      ) {
        personalMovieDB.genres.push(answer);
      } else {
        i--;
      }
    }
    this.genres.forEach((item, number, genres) => {
      console.log(`Любимый жанр # ${number + 1} - это ${genres[number]}`);
    });
  },
  detectPersonalLevel: function () {
    if (this.count < 10 && this.count >= 0) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (this.count >= 10 && this.count < 30) {
      console.log("Вы классический зритель");
    } else if (this.count >= 30) {
      console.log("Вы киноман!");
    } else {
      console.log(`Произошла Ошибка ${this.count} < 0`);
    }
  },

  toggleVisibleMyDB() {
    this.privat ? (this.privat = false) : (this.privat = true);
  },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
