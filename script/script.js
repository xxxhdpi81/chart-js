var ctx = $('#myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월','11월', '12월'],
        datasets: [{
            label: '2020',
            data: [12, 19, 3, 5, 2, 3, 12, 18, 4, 16, 8, 6],
            backgroundColor: [
                'rgba(158,158,158,0.2)'
            ],
            borderColor: [
                '#ddd'
            ],
            borderWidth: 1
        }]
    },
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


var ctx2 = $('#myChart2');
var myChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월','11월', '12월'],
        datasets: [
            {
            label: '2019',
            data: [8, 12, 3, 5, 2, 3, 12, 18, 4, 16, 8, 6],
            backgroundColor: 'rgba(255,0,0,0.2)',
            borderColor: 'rgba(226,14,14,0.2)',
            pointBackgroundColor: '#f1abab',
            pointBorderColor: '#cb7d7d',
            pointStyle: 'circle',
            lineTension: 0.3,
            pointRadius: 3,
            pointHoverRadius: 5,
            borderWidth: 1
        },
        {
            label: '2020',
            data: [1, 2, 3, 3, 4, 6, 8, null, null, null, 8, 6],
            backgroundColor: 'rgba(255,140,0,0.2)',
            borderColor: 'rgba(208,116,3,0.2)',
            pointBackgroundColor: 'rgba(220,123,4,0.2)',
            pointBorderColor: 'rgba(180,101,4,0.2)',
            pointStyle: 'circle',
            lineTension: 0.3,
            pointRadius: 3,
            pointHoverRadius: 5,
            borderWidth: 1,
            spanGaps: true
        }
        ],

    },
    options: {
        scales: {
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx3 = $('#myChart3');
var myChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월','11월', '12월'],
        datasets: [{
            label: '2020',
            data: [3, 5, 8, 10, 2, 3, 5, 10, 4, 16, 8, 6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],

            borderWidth: 1
        }]
    },
    options: {
        legend: {display: false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var ctx4 = $('#myChart4');

var data2016 = {
    label: '2020',
    data: [3, 5, 8, 10, 2, 3, 5, 10, 4, 16, 8, 6],
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
}

var data2017 = {
    label: '2020',
    data: [2, 8, 4, 5, 5, 6, 10, 5, 8, 8, 4, 3],
    backgroundColor: 'rgba(241,155,6,0.2)',
    borderColor: 'rgba(201,129,4,0.2)',
    borderWidth: 1

}

var myChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월','11월', '12월'],
        datasets: [
            data2016,
            data2017
        ]
    },
    options: {
        legend: {display: false},
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});