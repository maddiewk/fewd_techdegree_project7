// create line chart
const trafficChart = document.getElementById('trafficLineChart');

var lineChart = new Chart(trafficChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        lineTension: 0,
        data: [804, 1038, 1019, 1488, 929, 1371, 1426, 1578, 1532, 1215, 1493, 1516]
      }
    ]
  },
  options: {
    title: {
      display: false
    },
    legend: {
      display: false
      },
    // layout: {
    //   padding: {
    //     left: 30,
    //     right: 30,
    //     top: 10,
    //     bottom: 10
    //   }
    // },
    maintainAspectRatio: false
  }
});

// create bar chart
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
    legend: {
      display: false
    },
    maintainAspectRatio: false
  }
});

// donut chart
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
    legend: {
      display: true,
      labels: {
        boxWidth: 15,
        // padding: 20,
        fontSize: 15
      },
      position: 'right',
    },
    maintainAspectRatio: false
  }
});
