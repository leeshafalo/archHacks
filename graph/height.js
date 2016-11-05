
google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);
  function drawChart() {    

 var data = new google.visualization.DataTable();
  data.addColumn('number', 'Month');
      data.addColumn('number', 'Height');

    data.addRows([
        [1,41.8],
        [2,32.4],
        [3,25.7],
        [4,0.5],
        [5,4],
        [6,7.7],
        [7,9.6],
        [8,10.6],
        [9,14.8],
        [10, 11.6],
        [11,4.7],
        [12,5.2],
        [13, 3.6],
        [14,  13.4]
      ]);
var options = {
        chart: {
          title: 'Baby Infant Growth Charts',
          subtitle: 'each unit'
        },
        width: 900,
        height: 500,
        axes: {
          x: {
            0: {side: 'bottom'}
          }
        }
      };
     var chart = new google.charts.Line(document.getElementById('line_top_x'));

      chart.draw(data);   
    }