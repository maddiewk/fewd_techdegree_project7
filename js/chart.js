// datasets for line chart
let hourlyLineData = {
  labels: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],
  datasets: [
    {
      lineTension: 0,
      data: [0, 1, 0, 0, 3, 2, 6, 8, 4, 2, 10, 9, 13, 7, 8, 6, 11, 4, 2, 1, 4, 5, 6, 8]
    }
  ]
};

let dailyLineData = {
  labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
  datasets: [
    {
      lineTension: 0,
      data: [67, 39, 48, 44, 77, 91, 80]
    }
  ]
};

let weeklyLineData = {
  labels: ['16-22', '23-29', '10-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
  datasets: [
    {
      lineTension: 0,
      data: [204, 538, 619, 388, 829, 971, 926, 1078, 932, 1215, 1193, 1316]
    }
  ]
};

let monthlyLineData = {
  labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      lineTension: 0,
      data: [1694, 1938, 1519, 1888, 2029, 2371, 1826, 2178, 2032, 1995, 2293, 2016]
    }
  ]
};

let lineOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  title: {
    display: false
  },
  legend: {
    display: false
    },
  maintainAspectRatio: false
};

const trafficChart = document.getElementById('trafficLineChart');
function displayChart(data) {
  let lineChart = new Chart(trafficChart, {
    type: 'line',
    data: data,
    options: lineOptions
  });
};

// display default weekly line chart
displayChart(weeklyLineData);

// display hourly, daily, weekly, monthly charts based on nav links
const $trafficDiv = $('.chart-container');
const $navLink = $('.nav-link');

$trafficDiv.on('click', (e) => {
  if (e.target.textContent === 'Hourly') {
    displayChart(hourlyLineData);
    for (let i = 0; i < $navLink.length; i++) {
      $navLink[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }
  if (e.target.textContent === 'Daily') {
    displayChart(dailyLineData);
    for (let i = 0; i < $navLink.length; i++) {
      $navLink[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }
  if (e.target.textContent === 'Weekly') {
    displayChart(weeklyLineData);
    for (let i = 0; i < $navLink.length; i++) {
      $navLink[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }
  if (e.target.textContent === 'Monthly') {
    displayChart(monthlyLineData);
    for (let i = 0; i < $navLink.length; i++) {
      $navLink[i].classList.remove('active');
    }
    e.target.classList.add('active');
  }
})

// create and display bar chart
const trafficBarChart = document.getElementById('trafficBarChart');

var barChart = new Chart(trafficBarChart, {
  type: 'bar',
  data: {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [
      {
        data: [75, 102, 198, 149, 246, 199, 167],
        backgroundColor: [
          '#6A72AF', '#6A72AF', '#6A72AF', '#6A72AF', '#6A72AF', '#6A72AF', '#6A72AF'
        ]
      }
    ]
  },
  options: {
    animation: {
      duration: 0
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    maintainAspectRatio: false
  }
});

// create and display donut chart
const donutChart = document.getElementById('donutChart');

var pieChart = new Chart(donutChart, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [43, 27, 30],
      backgroundColor: ['#7EC0C3', '#81CA84', '#6A72AF']
    }],
  labels: [
    'Phones',
    'Tablets',
    'Desktop'
    ]
  },
  options: {
    animation: {
      duration: 0
    },
    legend: {
      display: true,
      labels: {
        boxWidth: 15,
        fontSize: 15
      },
      position: 'right',
    },
    maintainAspectRatio: false
  }
});
