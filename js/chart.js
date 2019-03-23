// create line chart
const trafficChart = document.getElementById('trafficLineChart');

var lineChart = new Chart(trafficChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        // label: false,
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
    layout: {
      padding: {
        left: 30,
        right: 10,
        top: 10,
        bottom: 10
      }
    }
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
        data: [75, 100, 148, 109, 196, 189, 77],
        backgroundColor: [
          '#5840A0', '#5840A0', '#5840A0', '#5840A0', '#5840A0', '#5840A0', '#5840A0'
        ]
      }
    ]
  },
  options: {
    legend: {
      display: false
    }
  }
});
