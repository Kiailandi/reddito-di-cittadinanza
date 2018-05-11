const loadCounter = () => {
    const startDay = moment('2018-05-10', 'YYYY-MM-DD');
    const now = moment();
    document.getElementById('app').innerHTML = `<h1 class="flex-item">Sono passati: <i class="em em-stopwatch"></i> <b>${now.diff(startDay, 'days')} giorni</b> ️️<i class="em em-stopwatch"></i></h1><h2 class="flex-item">e siamo ancora senza <i class="em em-money_mouth_face"></i> <b>REDDITO DI CITTADINANZA</b> <i class="em em-money_mouth_face"></i></h2>`;
    document.getElementById('app').innerHTML += `<h3 class="flex-item-footer">Made with <span class="heart">❤</span> by <a href="http://kiailandi.github.io">Kiailandi</a> <i class="em em-male-technologist"></i></h3>`;
};

if( document.readyState === 'complete' ) {
    loadCounter();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        loadCounter();
    });
}
