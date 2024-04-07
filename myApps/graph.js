
const entrancesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
    label: 'Site Entrances',
    data: [100, 200, 150, 300, 250, 400], 
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
    }]
};

const ctx = document.getElementById('graph').getContext('2d');

const siteEntranceChart = new Chart(ctx, {
    type: 'line',
    data: entrancesData,
    options: {
    scales: {
        yAxes: [{
        ticks: {
            beginAtZero: true
        }
        }]
    }
    }
});