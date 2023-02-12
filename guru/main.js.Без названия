const toggleButton = document.getElementById('toggleWeekBtn');
const toggleString = document.getElementById('toggleString');
const topWeek = document.getElementById('topWeek');
const downWeek = document.getElementById('downWeek');

if (!isUpWeek) {
    toggleButton.innerText = 'Переключить на верхнюю неделю';
    toggleString.innerText = 'Переключить на верхнюю неделю';
    topWeek.style.display = 'none';
    downWeek.style.display = 'flex';
} else {
    toggleButton.innerText = 'Переключить на нижнюю неделю';
    toggleString.innerText = 'Переключить на нижнюю неделю';
    downWeek.style.display = 'none';
    topWeek.style.display = 'flex';
}

const toggleWeek = () => {
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
}

toggleButton.addEventListener('click', toggleWeek);
toggleString.addEventListener('click', toggleWeek);
