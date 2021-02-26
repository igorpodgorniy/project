/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdvImg = document.querySelectorAll('.promo__adv img');
const promoBg = document.querySelector('.promo__bg');
const promoGenre = promoBg.querySelector('.promo__genre');
const promoInteractiveList = document.querySelector('.promo__interactive-list');

promoAdvImg.forEach(item => {
    item.remove();
});

promoGenre.textContent = 'драма';
promoBg.style.backgroundImage = "url('img/bg.jpg')";

promoInteractiveList.innerHTML = '';

movieDB.movies.sort().forEach((item, i) => {
    promoInteractiveList.insertAdjacentHTML('beforeend',`
        <li class="promo__interactive-item">${i + 1}. ${item}
            <div class="delete"></div>
        </li>`);
});