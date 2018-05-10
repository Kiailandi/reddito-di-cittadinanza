const loadCounter = () => {
    const startDay = moment('2018-05-10', 'YYYY-MM-DD');
    const now = moment();
    document.getElementById('app').innerHTML = `<h1 class="flex-item">Sono passati: ⏱️ <b>${now.diff(startDay, 'days')} giorni</b> ️️⏱️</h1><h2 class="flex-item">e siamo ancora senza 💰 <b>REDDITO DI CITTADINANZA</b> 💰</h2>`;
};

if( document.readyState === 'complete' ) {
    loadCounter();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        loadCounter();
    });
}