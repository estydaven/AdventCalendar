// Parallax script

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// Calendar script

const messages = [
	// 9.12
	["Камон, ребята, это же адвент календарь! Будем получать небольшие ништяки и делать уютные делишки🤩 А сегодня, в первый день адвента, у Дедушки Морроуза есть для нас небольшой подарок, который точно подарит много интересных минут📚"],
	// 10.12
	["Что ж, первый подарок распечатан. А сегодня вместе с Хэрриотом мы посмотрим небольшой рождественский спецвыпуск Стражей Галактики - распечатаем и новогодний кинематограф🎉"],
	// 11.12
	["❄❄❄ А не прогуляться ли нам в парк?❄❄❄ А на вечер прикупить новогоднего пива или кваса🍺"],
	// 12.12
	["Снегопад подарков продолжается!🎁 Сегодня это что-то маленькое, милое и старое🥰"],
	// 13.12
	["Давай устроим вечер покатушек на новогодних танках!✌️"],
	// 14.12
	["Сегодня Дедушка Морроуз припас для нас вкусняшку😋 А шлифанем мы ее просмотром зимнего и доброго фильма День Сурка🐭"],
	// 15.12
	["Маленький милый подарок ждет нас под... Хм, а под чем же он нас ждет?🤔"],
	// 16.12
	["Для того, чтобы помнить свои дела, нужно куда-то их записывать, поэтому Дедушка Морроуз принес для Юры очень нужный для этого подарок📗. А вечером можно посмотреть фильм Рождественские каникулы (1989)👀"],
	// 17.12
	["А не поиграть ли нам в танки настольные и глянуть душевнейший фильм Все мы из Бюллербю, 1 часть?"],
	// 18.12
	["И снова сектор Миленький Подарок на барабане!✨✨✨ А вечером можно напечь ароматных динозавров 🦕 и посмотреть вторую часть Все мы из Бюллербю"],
	// 19.12
	["Юра становится единственным и неповторимым обладателем эксклюзивного купона на 10 сеансов массажа🎉(начать использовать его нужно до 8 января, иначе он сгорит😱) Какую же часть тела он выберет?😉 Вечером смотрим фильм Добро пожаловать, или Соседям вход воспрещен"],
	// 20.12
	["Сегодня катаем новогодние кораблики и смотрим фильм Рождество кота Боба😻"],
	// 21.12
	["Чем ближе к Новому году тем нужнее новый календарь, не так ли?😊 Вечерний просмотр фильма Эльф🧝"],
	// 22.12
	["Чтобы хоть капельку почувствовать себя Гарри Поттером, надо выпить сливочного пива в Хогсмите🍻 Увы, Гродно - не Хогсмид, поэтому придется нам сварить его самим😉 А к сливочному пиву у нас прилагается фильм Рождественская история (2007 год)🎄"],
	// 23.12
	["🌟Небольшой, но очень полезный подарок ждет Юру сегодня🌟"],
	// 24.12
	["Пока Валя в отъезде, Дедушка Морроуз припас для Юры вкусный и немного вредный подарок😜 А где он лежит, надо спросить у Вали, Дедушка запамятовал😏"],
	// 25.12
	["Дедушка Морроуз продолжает задабривать Юру подарочками и скрашивать его ожидание приезда Вали🎁 Или его отдых от Вали?🤪"],
	// 26.12
	["Дед Морроуз велит проследить за католиками - что у них там в костеле происходит интересное⛪, после этого погулять на ярмарке в городе🎊☕ и посмотреть фильм Семьянин👌"],
	// 27.12
	["Устравиаем рождественские чтения!🥳🥳🥳 Читаем Рождественскую песнь в прозе Чарльза Диккенса (1 и 2 часть), варим глинтвейн 🍷🍷🍷 и смотрим фильм Рождественское приключение Бетховена🎆"],
	// 28.12
	["Рождественские чтения продолжаются - сегодня читаем 3 и 4 часть Рождественской песни в прозе☃️ И, конечно, новогодний кинематограф - Санта-Хрякус: Страшдественская сказка, 1 часть🎅"],
	// 29.12
	["Ещё пару дней - и Новый год, поэтому сегодня очень нужный согревающий душу подарок на год следующий🗓️ Дочитываем Рождественскую песнь в прозе (5 часть)📖, смотрим 2 часть Санта-Хрякус: Страшдественская сказка🕯️"],
	// 30.12
	["Что-то давно Дед Морроуз ничего не дарил маленького и миленького😇 Круглый подарочек для Юры уже где-то спрятан🎁 Смотрим классику советского кино - фильм Карнавальная ночь❄️✨❄️"],
	// 31.12
	["Вот и Канун Нового года!🥂 Наш адевент почти завершен, да и год тоже🤗 Давай изо всех сил пожелаем, чтобы в следующем году было много-много доброты🥰 Юра, а для тебя есть еще круглый подарочек - угадай, какой🌲😁🌲"],
	// 01.01
	["Сегодня самый тихий день года, потому что все спят полдня😂 Наступил Новый год - какими мы будем в нем, какими будут наши мечты и стремления?🤔 Очень важно, чтобы они у нас в принципе были❤️❤️❤️ Юра, а у Деда Морроуза припасен для тебя последний подарочек🥰"]
];

const calendar = document.querySelector('.calendar');
const calendarList = document.querySelectorAll('.calendar__item');
const currentDate = new Date();

const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close');
const popupNumber = document.querySelector('.popup__number');
const popupText = document.querySelector('.popup__text');

function closePopup() {
    popup.classList.add('hidden');
}
popupCloseBtn.addEventListener('click', closePopup);

calendarList.forEach(item => {
	const itemNumber = item.dataset.number;
	
	if ((currentDate.getDate() - 8) == itemNumber || (currentDate.getDate() - 8) > itemNumber) {
		item.classList.remove('used');
	} else {
		item.classList.add('used');
	}
})

calendar.addEventListener('click', (event) => {
	popup.classList.remove('hidden'); 
	const elemNumber = Number(event.target.dataset.number);

	if (event.target.classList.contains('used')) {
		closePopup();
	}
	for (let i = 0; i < messages.length; i++) {
		if (elemNumber == i) {
			popupText.innerText = messages[i - 1];
			popupNumber.innerText = i;
		} 
		if (elemNumber == 24) {
			popupText.innerText = messages[23];
			popupNumber.innerText = 24;
		}
	}
});

// Background script

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomNum(1, 9);

function setBg() {
    const bgNum = String(randomNum);
    const body = document.body;
	body.style.backgroundImage = `url(images/backgrounds/bg${bgNum}.jpg)`;
}

setBg();