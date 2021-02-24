'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let lastFilm = prompt('Один из последних просмоторенных фильмов?');
let raitFilm = prompt('Насколько оцените его?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмоторенных фильмов?'),
    b = prompt('Насколько оцените его?'),
    c = prompt('Один из последних просмоторенных фильмов?'),
    d = prompt('Насколько оцените его?');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);