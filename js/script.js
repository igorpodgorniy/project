'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilm: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмоторенных фильмов?'),
                b = prompt('Насколько оцените его?');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonlLevel: function() {
        if (this.count < 10 && this.count > 0) {
            alert('Просмотренно довольно мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) {
            alert('Вы классический зритель');
        } else if (this.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(hiden) {
        if (!hiden) {
            console.log(this);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}:`);
            if (genre != null && genre != '') {
                this.genres[i] = genre;
            } else {
                i--;
            }
        }
        
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        })
    },
    toggleVisibleMyDB: function() {
        if (this.private) {
            this.private = false;
        } else {
            this.private = true;
        }
    }
};