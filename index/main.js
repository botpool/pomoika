const toggleButton = document.getElementById('toggleWeekBtn');
const toggleString = document.getElementById('toggleString');
const topWeek = document.getElementById('topWeek');
const downWeek = document.getElementById('downWeek');
const weekTypeText = document.getElementById('weekTypeText');
const weekDates = document.getElementById('weekDates');

// Определяем верхнеяя или нижняя неделя
let now = new Date();
let thisYear = new Date(now.getFullYear(), 0, 1);
let weekNumber = Math.ceil(
  ((now.getTime() - thisYear.getTime()) / 86400000 + thisYear.getDay() + 1) / 7,
);
let isUpWeek = weekNumber % 2 === 0;

if (!isUpWeek) {
  toggleButton.innerText = 'Переключить на верхнюю неделю';
  toggleString.innerText = 'Переключить на верхнюю неделю';
  topWeek.style.display = 'none';
  downWeek.style.display = 'flex';
  weekTypeText.textContent = 'нижняя';
} else {
  toggleButton.innerText = 'Переключить на нижнюю неделю';
  toggleString.innerText = 'Переключить на нижнюю неделю';
  downWeek.style.display = 'none';
  topWeek.style.display = 'flex';
  weekTypeText.textContent = 'верхняя';
}
console.log('toggleString: ', toggleString);

// Перелючалка недель
const toggleWeek = () => {
  console.log('Произошел клик!');
  console.log('toggleString: ', toggleString);

  if (!isUpWeek) {
    downWeek.style.display = 'none';
    topWeek.style.display = 'flex';
    toggleButton.innerText = 'Переключить на нижнюю неделю';
    toggleString.innerText = 'Переключить на нижнюю неделю';
  } else {
    topWeek.style.display = 'none';
    downWeek.style.display = 'flex';
    toggleButton.innerText = 'Переключить на верхнюю неделю';
    toggleString.innerText = 'Переключить на верхнюю неделю';
  }
  isUpWeek = !isUpWeek;
};

toggleButton.addEventListener('click', toggleWeek);
toggleString.addEventListener('click', toggleWeek);

// Даты текущей недели

const getTwoDigits = (num) => {
  return String(num).padStart(2, '0');
};

const first = now.getDate() - now.getDay();
const last = first + 6;
const firstday = {
  fullDate: new Date(now.setDate(first + 1)),

  getFormatted: function () {
    const day = this.fullDate.getDate();
    const month = this.fullDate.getMonth() + 1;

    return getTwoDigits(day) + '.' + getTwoDigits(month);
  },
};

const lastday = {
  fullDate: new Date(now.setDate(last + 1)),

  getFormatted: function () {
    const day = this.fullDate.getDate();
    const month = this.fullDate.getMonth() + 1;

    return getTwoDigits(day) + '.' + getTwoDigits(month);
  },
};

weekDates.innerText = firstday.getFormatted() + '-' + lastday.getFormatted();

console.log(document.getElementsByClassName('weekDay__table__name'))