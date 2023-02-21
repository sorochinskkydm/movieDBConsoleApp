'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?")
    }
}

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let film1 = prompt('Один из последних просмотренных фильмов?')
        let someCount1 = +prompt('На сколько оцените его?')
        if (film1 != null && someCount1 != null && film1 != "" && someCount1 != "" && film1.length < 50) {
            personalMovieDB.movies[film1] = someCount1 
        } else i--;
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов")
    }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log("Просмотрено мало фильмов")
    }else console.log("Вы киноман")
}

//detectPersonalLevel();

function showMyDB() {
    if(personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        let favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = favouriteGenre;
    }
    console.log(personalMovieDB);
}

writeYourGenres();






