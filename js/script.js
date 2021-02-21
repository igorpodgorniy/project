'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let lastFilm = prompt('Один из последних просмоторенных фильмов?');
let raitFilm = prompt('Насколько оцените его?');

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[lastFilm] = raitFilm;
personalMovieDB.count = numberOfFilms;

console.log(personalMovieDB);