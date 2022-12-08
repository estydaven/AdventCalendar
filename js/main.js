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
	["❄❄❄❄❄ А не прогуляться ли нам в парк по такой классной зимней погоде?❄❄❄❄❄ А на вечер прикупить новогоднего пива🍺"],
	// 12.12
	["Подарок - первая елочная игрушка"],
	// 13.12
	["Покатать новогодние танки"],
	// 14.12
	["ФИЛЬМ ДЕНЬ СУРКА, что-то вкусное"],
	// 15.12
	["Подарок третья елочная игрушка"],
	// 16.12
	["Юре наклейки на клаву"],
	// 17.12
	["Орешки и сладости Юре"],
	// 18.12
	["Подарок - вторая елочная игрушка, ФИЛЬМ Семьянин"],
	// 19.12
	["Купон на 10 сеансов массажа Юре, ФИЛЬМ Добро пожаловать, или Соседям вход воспрещен"],
	// 20.12
	["Катаем новогодние кораблики, новогодние коробки?, ФИЛЬМ Полярный экспресс"],
	// 21.12
	["Подарок обычный новогодний календарь, ФИЛЬМ Эльф"],
	// 22.12
	["Подарок записная книжка Юре, печеньки-динозавры, ФИЛЬМ Щелкунчик и четыре королевства"],
	// 23.12
	["Варим сливочное пиво, ФИЛЬМ Рождественская история (2007)"],
	// 24.12
	["Украшаем квартиру, ФИЛЬМ Чудо на 34-й улице"],
	// 25.12
	["Варим глинтвейн, настолка танки, ФИЛЬМ Все мы из Бюллербю, 1 часть"],
	// 26.12
	["Проследить за католиками - что у них там в костеле, погулять на ярмарке в городе, ФИЛЬМ Все мы из Бюллербю, 2 часть"],
	// 27.12
	["Рождественская песнь в прозе - 1 и 2 часть, ФИЛЬМ Рождественское приключение Бетховена"],
	// 28.12
	["Рождественская песнь в прозе - 3 и 4 часть, ФИЛЬМ Санта-Хрякус: Страшдественская сказка, 1 часть"],
	// 29.12
	["Подарок милый новогодний календарь, Рождественская песнь в прозе - 5 часть, обсуждение, ФИЛЬМ Санта-Хрякус: Страшдественская сказка, 2 часть"],
	// 30.12
	["Третья монетка Юре, ФИЛЬМ Карнавальная ночь"],
	// 31.12
	["Первая монетка для Юры"],
	// 01.01
	["Вторая монетка для Юры"]
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
	const itemNumber = item.dataset.item;
	
	if ((currentDate.getDate() - 8) == itemNumber || (currentDate.getDate() - 8) > itemNumber) {
		item.classList.remove('used');
	} else {
		item.classList.add('used');
	}
})

calendar.addEventListener('click', (event) => {
	popup.classList.remove('hidden'); 
	const elemNumber = Number(event.target.dataset.number);	
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