'use strict';

document.addEventListener('DOMContentLoaded', ()=> {
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
    const moviList = document.querySelector('.promo__interactive-list');
    const add = document.querySelector('form.add');
    const checkbox = add.querySelector('[type="checkbox"]');
    const addingInput = add.querySelector('.adding__input');
        
    const deletAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => {
        promoGenre.textContent = 'драма';
        promoBg.style.backgroundImage = "url('img/bg.jpg')";
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function addElementList(films, parent) {
        parent.innerHTML = '';

        sortArr(films);

        films.forEach((item, i) => {
            parent.insertAdjacentHTML('beforeend',`
                <li class="promo__interactive-item">
                    ${i + 1}. ${sliceNameFilm(item)}
                    <div class="delete"></div>
                </li>`);
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);

                addElementList(films, parent);
            });
        });
    }

    const sliceNameFilm = function(item) {
        if (item.length > 21) {
            item = item.slice(0, 21) + '...';
        }
        return item;
    };
    
    add.addEventListener("submit", e => {
        e.preventDefault();

        let newFilm = addingInput.value;
        let favorite = checkbox.checked;

        if (newFilm) {
            if(favorite) {
                console.log("Добавляем любимый фильм");
            }
            
            movieDB.movies.push(newFilm);
            addElementList(movieDB.movies, moviList);
        }
        e.target.reset();
    });

    deletAdv(promoAdvImg);
    addElementList(movieDB.movies, moviList);
    makeChanges();
});