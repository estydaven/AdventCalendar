// Parallax script

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// Calendar script

const messages = [
	// 8.12
	["Нынешний адвент не стал сюрпризом, но, надеюсь, он немножко поднимет нам настроение🤩 Перед праздниками наступает время добра и чудес, поэтому почему бы нам сегодня не сделать доброе дело и не пожертвовать небольшую сумму на любую благотворительность?"],
	// 9.12
	["Сегодняшний день принес нам небольшой вкусный подарочек и просмотр фильма Рождественские каникулы🎉"],
	// 10.12
    ["Это не подарок, но иногда мы долго откладываем что-то на потом, поэтому наконец-то разрешается не откладывать - специально для Юры сертификат на игру в Кота😻"],
    // 11.12
	["Очень нужно покататься по фану в танчики, ну прям очень✌️"],
	// 12.12
	["Идём в магазин за новогдними напитками - квасом или пивом на выбор🍺 А пить их будем под прекрасный старый мультфильм Анастасия!"],
	// 13.12
	["Какой же следующий год да без календаря? Правильно, никакой😊"],
	// 14.12
	["Объявляю вечер фана в корабликах!😋 А на вечер фильм Светлое рождество🌟"],
	// 15.12
	["Сегодня Дедушка Морроуз принес для Юры замечательную историю в толстой обложке!✨✨✨"],
	// 16.12
	["Чтобы у Юры не мёрзли ноги, ему нужны тапочки, поэтому Дедушка Морроуз принес ему сертификат на покупку любых тапочек на его выбор🦶"],
	// 17.12
	["Идем в парк гулять и кормить птичек🐦, после чего устроим просмотр фильма Мальчик по имени Рождество"],
	// 18.12
	["Будем сегодня пробовать что-то новое, что ни разу не пробовали из еды, а вечером - фильм Скакун👀"],
	// 19.12
	["Играем в танковую настолку - кто кого обыграет в этот раз?🚜 А потом посмотрим фильм Рождество с неудачниками"],
	// 20.12
	["И снова подарок, который нельзя потрогать - эксклюзивно для юриной спины сертификат на курс массажа👐"],
	// 21.12
	["Насыщенный день сегодня - пиво сливочное сварить🍻, под просмотр мультика Хильда и горный король его употребить😊"],
	// 22.12
	["Не только Юре Дед Морроуз книжечку принес, для Вали он тоже приберег подарок📚😉"],
	// 23.12
	["Пока Валя в отъезде, Дедушка Морроуз припас для Юры вкусный подарок😜 А где он лежит, надо спросить у Вали, Дедушка запамятовал😏 А когда Валя приедет"],
	// 24.12
	["🌟Небольшой, но очень полезный подарок ждет Юру сегодня🌟"],
	// 25.12
	["И снова рождественские чтения!🥳🥳🥳 Начинаем читать Письма Рождественского Деда авторства Толкина (1925-1928) и кушаем булочки с шоколадно-ореховой пастой, смотрим советские новогодние мультфильмы!"],
	// 26.12
	["Дед Морроуз велит проследить за католиками - что у них там в костеле происходит интересное⛪, после этого погулять на ярмарке в городе🎊☕ и почитать Письма Рождественского Деда (1929 - 1931)"],
	// 27.12
	["Продолжаем читать Письма Рождественского Деда (1932), жуя лакричные мармеладки под фильм Трое на снегу🎆"],
	// 28.12
	["Письма Рождественского Деда еще не окончены, поэтому читаем дальше(1933)☃️, варим какао и смотрим на кросивое!"],
	// 29.12
	["Уже 29 число?😱 Кажется, под это дело можно и за чем-нибудь вкусненьким сходить, чтобы Новый год ждать веселей было! Читаем Письма Рождественского Деда (1934-1935)📖, смотрим фильм Эта замечательная жизнь🕯️"],
	// 30.12
	["А давай приготовим что-нибудь под новогоднюю музыку😇, почитаем Письма Рождественского Деда (1936-1938) и посмотрим фильм Чудо на 34 улице❄️✨❄️"],
	// 31.12
	["Вот и Канун Нового года!🥂 Наш адевент почти завершен, да и год тоже🤗 Направим наши пожелания на доброту и здоровье - личное и наших родных🥰 Для Юры есть еще небольшой полезный подарок🌲, а для нас обоих - сертификат на день Деланья чего хочется! И дочитаем финальное Письмо Рождественского деда🌲"]
];

const calendar = document.querySelector('.calendar');
const calendarList = document.querySelectorAll('.calendar__item');
const currentDate = new Date();

const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close');
const popupNumber = document.querySelector('.popup__number');
const popupText = document.querySelector('.popup__text');
const popupBtn = document.querySelector('.popup__link');
const popupImage = document.querySelector('.popup__image');

function closePopup() {
    popup.classList.add('hidden');
}
popupCloseBtn.addEventListener('click', closePopup);

calendarList.forEach(item => {
	const itemNumber = item.dataset.number;

	if ((currentDate.getDate() - 7) === +itemNumber || (currentDate.getDate() - 7) > +itemNumber) {
		item.classList.remove('used');
	} else if (currentDate === 1 && +itemNumber === 24) {
        item.classList.remove('used');
    } else {
		item.classList.add('used');
	}
})

calendar.addEventListener('click', (event) => {
	popup.classList.remove('hidden');
	const elemNumber = Number(event.target.dataset.number);

    if (!(event.target.classList.contains('calendar__item_sert'))) {
        popupBtn.classList.add('hidden');
        popupImage.classList.add('hidden');
    } else {
        popupBtn.classList.remove('hidden');
        popupImage.classList.remove('hidden');
        popupBtn.href = `images/sert-${elemNumber}.jpg`;
        popupImage.src = `images/sert-${elemNumber}.jpg`;
    }

	if (event.target.classList.contains('used')) {
		closePopup();
	}
	for (let i = 0; i < messages.length; i++) {
		if (elemNumber === i) {
			popupText.innerText = messages[i - 1];
			popupNumber.innerText = i;
		} 
		if (elemNumber === 24) {
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