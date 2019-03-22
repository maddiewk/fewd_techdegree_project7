const trafficChart = document.getElementById('trafficLineChart');

var lineChart = new Chart(trafficChart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2018',
        data: [804, 1038, 1019, 1488, 929, 1371, 1526, 1578, 1832, 2115, 1993, 2002]
      }
    ]
  },
  options: {
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
