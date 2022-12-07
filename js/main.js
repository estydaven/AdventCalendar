// Parallax script

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

// Calendar script

const messages = [
	["1"],
	["2"],
	["3"],
	["4"],
	["5"],
	["6"],
	["7"],
	["8"],
	["9"],
	["10"],
	["11"],
	["12"],
	["13"],
	["14"],
	["15"],
	["16"],
	["17"],
	["18"],
	["19"],
	["20"],
	["21"],
	["22"],
	["23"],
	["24"]
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

popupCloseBtn.addEventListener('click', closePopup);

// function getMessage(day) {
//     this.adventMessage = 'Day' + day + ' of Advent\n\n' + '"' + messages[day - 1][0] + '"\n\n\t' + 'by ' + messages[day - 1][1] + '\n\n';

//     this.content = function() {
//         const calendarList = document.querySelectorAll('.calendar__item');

//         calendarList.forEach(item => {
//             if((currentDate.getMonth() + 1) < 12 || currentDate.getDate() < day) {
//                 item.classList.add('used');
//                 item.onclick = function() {
//                     return false;
//                 }
//             } else {
//                 let adventMessage = this.adventMessage;
//                 item.onclick = function() {
//                     alert(adventMessage);
//                     return false;
//                 }
//             }
//         })
//     }
// }

// (function() {
//     var doors = [];
   
//     for(var i = 0; i < 24; i++) {
   
//       doors[i] = new getMessage(calendar, i + 1);
//       //doors[i].content();
   
//     }
   
//     return doors;
//   })();