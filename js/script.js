const loadCounter = () => {
    const startDay = moment('2018-05-10', 'YYYY-MM-DD');
    const now = moment();
    document.getElementById('app').innerHTML = `<h1 class="flex-item">Sono passati: ⏱️ <b>${now.diff(startDay, 'days')} giorni</b> ️️⏱️</h1><h2 class="flex-item">e siamo ancora senza 💰 <b>REDDITO DI CITTADINANZA</b> 💰</h2>`;
    document.getElementById('app').innerHTML += `<h3 class="flex-item-footer">Made with <span class="heart">❤</span> by <a href="http://kiailandi.github.io">Kiailandi</a></h3>`;
};

if( document.readyState === 'complete' ) {
    loadCounter();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        loadCounter();
    });
}