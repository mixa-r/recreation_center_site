//#region анимация скролла
$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        bloclId = $(this).data('scroll');
        blockOffset = $(bloclId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset - 50
        }, 700)
    });
    //#endregion

    //#region модальное окно
    $("[data-modal]").on("click", function(event) {
        event.preventDefault();

        $(modal_resume).addClass('show');

    });

    $(modal_resume).on("click", function() {
        $(modal_resume).removeClass('show');
    })
});
//#endregion

//#region Давай знакомится
function Welcome() {
    var name = prompt("Как тебя зовут?");
    console.log(name);
    if (name != null) {
        alert("Добро пожаловать " + name + "!");
        result = confirm(name + ", поиграем в игру?");
        if (result == true) {
            Game();
        } else {
            alert("Приятного путешествия по сайту!");
        }
    }
}
//#endregion

//#region игра плюс использование switch
function Game() {
    // массив чисел (одно из которых нужно угадать пользователю)
    const numbers = [1, 10];
    let result = false;

    // функция, которая будет возвращать число из массива, к которому переданное число оказалось ближе
    const returnCloserNumber = (number) => {
        let searchIndex = 1;
        let difference = 0;
        numbers.forEach((value, index) => {
            if (index === 0) {
                searchIndex = index;
                difference = Math.abs(value - number);
            } else {
                if (Math.abs(value - number) < difference) {
                    searchIndex = index;
                    difference = Math.abs(value - number);
                }
            }
        });
        return numbers[searchIndex];
    };

    while (!result) {
        let answer = prompt('Угадай число? Это должно быть одно из чисел: от 1 до 10');
        // прерываем выполнение цикла, если пользователь нажал на «Отмена», ничего не ввёл и нажал «Ок» или оно не является целым числом
        if (answer === null || answer === '' || Number.isInteger(+answer) === false) {
            break;
        }
        // приведем answer к числу
        answer = +answer;
        // возвратим ближайшее к нему число из массива
        const number = returnCloserNumber(answer);

        switch (answer) {
            case number - 2:
            case number + 2:
                alert('Уже теплее!');
                break;
            case number - 1:
            case number + 1:
                alert('Горячо!');
                break;
            case number:
                alert(`Ты угадал! Возможно ты искал это: promo_canyon`);
                result = true;
                break;
            default:
                alert('Холодно!');
        }
    }
}
//#endregion

//#region промокод за паролем
function Input() {
    login_ok = false;
    user_name = "";
    password = "";
    password = prompt("Пароль", "");
    password = password.toLowerCase();
    if (password == "promo_canyon") {
        login_ok = true;
        alert("Твой промокод для скидки: ИВТ19-2");
    }

    if (login_ok == false) alert("Неверный пароль, нажми на кнопку \"Давай знакомится\" и выиграй пароль для промокода!");
}
//#endregion

//#region раскрыть/скрыть текст в блоке номера
$(document).ready(function() {
    $(".work_box").click(function() {
        if ($("#more").is(":hidden")) {
            $("#more").slideDown("fast");
        } else {
            $("#more").hide();
        }
    });
});

$(document).ready(function() {
    $(".work_box").click(function() {
        if ($("#more1").is(":hidden")) {
            $("#more1").slideDown("fast");
        } else {
            $("#more1").hide();
        }
    });
});

$(document).ready(function() {
    $(".work_box").click(function() {
        if ($("#more2").is(":hidden")) {
            $("#more2").slideDown("fast");
        } else {
            $("#more2").hide();
        }
    });
});
//#endregion

//#region Модальное окно с калькулятором
function modal(id) {
    var modal = document.getElementById(id);
    var close = document.querySelectorAll('[data-close="true"]');
    modal.style.display = 'block';
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            modal.style.display = 'none';
        }
    }
    window.onclick = function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    };
    document.onkeydown = function(e) {
        if (e.keyCode == 27) {
            modal.style.display = 'none';
        }
    };
}
//#endregion

//#region  Промокод
var ans1;

function makeans1() {
    ans1 = document.getElementById('username').value

}
//#endregion

//#region калькулятор
function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
    var exp = document.form.textview.value;
    if (exp) {
        document.form.textview.value = eval(exp);
    }
    if (ans1 == "ИВТ19-2") {
        document.form.textview.value = eval(exp) * 0.9;
    }
}
//#endregion

//#region Скрип даты и веремени
function clock() {
    var d = new Date();
    var month_num = d.getMonth()
    var day = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();

    month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря");

    if (day <= 9) day = "0" + day;
    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

    date_time = day + " " + month[month_num] + " " + d.getFullYear() +
        " г.&nbsp;&nbsp;&nbsp;" + hours + ":" + minutes + ":" + seconds;
    if (document.layers) {
        document.layers.doc_time.document.write(date_time);
        document.layers.doc_time.document.close();
    } else document.getElementById("doc_time").innerHTML = date_time;
    setTimeout("clock()", 1000);
}
//#endregion

//#region  unload
'use strict';

window.onbeforeunload = function() {
    return "Всё равно уходим?";
};
//#endregion