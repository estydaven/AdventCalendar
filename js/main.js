// Parallax script

// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

// Calendar script

const messages = [
	// 8.12
	["Кажется, адвент-календарь превращается в нашу небольшую семейную предпраздничную традицию, и мне это, определённо, нравится🤩 Будем кушать мороженое вечером, потому чтоа когда мы в последний раз в декабре мороженое вообще ели?"],
	// 9.12
	["Для того, чтобы почувствовать надвигающееся Рождество, важно наполнить дом его ароматами. Например, испечь рождественские имбирные печеньки🍪"],
	// 10.12
    ["Чтобы не теряться в событиях следующего года, нам нужен календарь. А вот и он!😊"],
    // 11.12
	["Вечер с мороженым изярдно нас охладил, пора согреться кружечкой горячего шоколада✌️"],
	// 12.12
	["Продолжаем греться, но сегодня всё по-взрослому - берём фляжечку, наливаем туда что-то вкусное и согревающее🥃, и идём гулять в парк!"],
	// 13.12
	["'Солдатик был тронут и чуть не заплакал оловом, но это было бы неприлично, и он удержался.' Где там наша оловянная армия? Пора вести её в бой!🐎"],
	// 14.12
	["Не забываем о братьях наших меньших и идём в парк кормить птичек🐦"],
	// 15.12
	["Чем заняться в 10 часов вечера в воскресенье? Правильно - сходить поппить пивка в бар рядом с домом! Когда мы в последний раз так пиво пили?✨✨✨"],
	// 16.12
	["Пусть понедельник станет немножко радостнее от красоты, которую совсем скоро будет висеть на стеночке🌟"],
	// 17.12
	["В этом году у нас в адвенте что ни ужин, так что-то необычное. Устроим сегодня сладкий стол!😋🍭"],
	// 18.12
	["Согреваем свой вечер ароматной какавушкой☕"],
	// 19.12
	["Что-то ароматное, вкусное, горячее и очень сытное ждёт нас вечером - ничего не напоминает?😜🍺"],
	// 20.12
	["А за то, что Юра сегодня будет один без Вали и грустный, для него приготовлен небольшой подарок, который скрасит его ожидание💫"],
	// 21.12
	["Немного утешения от расставания с Валей сегодня, вроде и обычного, но с необычной добавкой😊 Ищи подарочек в ящике с миксером👀"],
	// 22.12
	["Берем вино🍷, добавляем туда специи, щепотку любви и употребляем под уютный рождественский фильм Рождество на 34 улице😇"],
	// 23.12
	["🌟А сегодня украшаем огоньками уже своё жизненное пространство, ведь уже так хочется рождественской красоты вокруг!🌟"],
	// 24.12
	["В городе уже развесили огоньки и поставили ёлки, которые так и ждут, чтобы мы сходили на них посмотреть😏 И заглянуть к католикам, конечно же⛪"],
	// 25.12
	["Чтобы в Новый год не тянуть ненужное, надо это выбросить без сожаления. Или всё же с небольшим сожалением?🤔"],
	// 26.12
	["Объявляю день нового! Идём в магазин, покупаем то, что не пробовали и... пробуем!😋"],
	// 27.12
	["Рождественские чтения под музыку с колокольчиками и с кружечкой вкусного чая - что может быть прекраснее перед Новым годом? Читаем повесть 'Колокола' Диккенса🎆"],
	// 28.12
	["Продолжаем наши читательские вечера после прекрасного рождественского концерта в Кирхе☃️"],
	// 29.12
	["Диккенс и сегодня будет радовать нас своей историей📖 А читать её мы будем, кушая вкусную рождественскую выпечку🥧"],
	// 30.12
	["Дочитываем прекрасную рождественскую повесть и закатываем сногсшибательный ужин при свечах🕯️🕯️🕯️"],
	// 31.12
	["Вот и Канун Нового года!🥂 Наш адевент почти завершен, да и год тоже🤗 Направим наши пожелания на доброту и здоровье - личное и наших родных🥰 А чтобы подкрепить свои пожелания действиями, отправим небольшую сумму на благотворительность для тех, кому в этой жизни повезло чуть меньше, чем нам❄️✨❄️"]
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

let randomNum = getRandomNum(1, 8);

function setBg() {
    const bgNum = String(randomNum);
    const body = document.body;
	body.style.backgroundImage = `url(images/backgrounds/bg${bgNum}.jpg)`;
}

setBg();

// Audio player
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.audio__icon');
let isPlay = false;
let randomAudio = +getRandomNum(1, 6);
audio.src = `audio/${randomAudio}.mp3`;

function playAudio() {
    // Если аудио не проигрывается, начинаем воспроизведение
    if (!isPlay) {
        // Проверяем, может ли аудио начать воспроизведение
        audio.play().then(() => {
            isPlay = true;
            playBtn.classList.remove('pause');
        }).catch(err => {
            console.error("Ошибка при воспроизведении аудио:", err);
        });
    } else {
        // Если аудио уже играет, ставим его на паузу
        audio.pause();
        isPlay = false;
        playBtn.classList.add('pause');
    }
}
playBtn.addEventListener('click', playAudio);

// Change text bird
const littleBird = document.querySelector('.bird_second');
const textBird = document.querySelector('.bird-text');

function changeTextBird() {
    littleBird.classList.add('active');
    textBird.innerHTML = 'Привет!';
    textBird.style.right = '-65px';
}
littleBird.addEventListener('mouseenter', changeTextBird);