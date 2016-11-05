
google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChartw);
  function drawChartw() {     
   var data = new google.visualization.DataTable();
      data.addColumn('number', 'Month');
      data.addColumn('number', 'Weight');
 
    data.addRows([
        [1,  37.8],
        [2,  30.9],
        [3,  25.4],
        [4,  11.7],
        [5,  11.9],
        [6,   8.8],
        [7,   7.6],
        [8,  12.3],
        [9,  16.9],
        [10, 12.8],
        [11,  5.3],
        [12,  6.6],
        [13,  4.8],
        [14,  4.2]
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

      chart.draw(data, options);                      
    }
