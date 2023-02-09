"use strict";

let buttonGo   = document.querySelector('.go')
let buttonStop = document.querySelector('.stop')
let number     = document.querySelector('.number')
let prediction = document.querySelector('.prediction')

let arr = [
    'Візьми від життя ВСЕ!',
    'Вчися знаходити в житті радість',
    'Видали те, що забруднює серце',
    'Коли ви полюєте за грошима, вони віддаляються від вас. Перестаньте думати про багатство, тоді воно неодмінно вас саме наздожене',
    'Зовсім скоро ви зможете з задоволенням витрачати гроші, а також із задоволенням їх заробляти',
    'Не здавайся і ти не програєш',
    'Через вашу індивідуальність і чарівність, ви завжди будете досягати, чого хочете',
    'Через 3 місяці, 3 тижні і 3 дні відбудеться подія, яка назавжди змінить вашу долю',
    'Скоро ви потрапите в печеру з скарбами. Однак не втрачайте голову: візьміть рівно стільки, скільки вам необхідно, решту залиште для інших',
    'Нехай доходи зростуть, а оточує лише затишок',
    'Для любові не існує учора, любов не думає про завтра. Вона жадібно тягнеться до нинішнього дня, але цей день потрібний їй увесь, необмежений, незатьмарений.',
    'Побутових справ і господарських турбот вас чекає чимало. Зате в любові і життя особистої все складеться чудово!',
    'Зовсім скоро ви загоритесь новою творчою роботою. Однак не обпалити крила! Не забувайте про своє здоров’я!',
    'Частіше признавайся батькам, що ти їх любиш, і станеться щось чудове.',
    'Доля подарунком здивує вас! Не втрачайте час даремно, доля для вас приготувала неймовірну зустріч',
    'Гряде рік успіхів і удач, легких рішень складних завдань! Доброго сміху і великих звершень, всі ж знають, що радісне веселощі праці – не перешкода.',
];

let randomNum;

buttonGo.addEventListener('click', goo);

function goo() {
    buttonGo.classList.add('none');
    buttonStop.classList.add('active')

    randomNum = setInterval(function () {
        let num = getRandomInt(0, arr.length - 1);
        number.textContent = num;

        return num;
    }, 0.5);
};

buttonStop.addEventListener('click', function () {
    clearInterval(randomNum);

    for (let i = 0; i < arr.length; i++) {
        prediction.textContent = arr[number.textContent];
    }

    buttonStop.classList.remove('active')
    prediction.classList.add('active')
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}