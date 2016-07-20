$(function(){
    $(".bash").typed({
        strings: ["dog metadata", "^300 cat ^300 metadata.txt"],
        typeSpeed: 0.2,
        backDelay: 200,
        callback: function() {
            $("#about").show();
            $("#terminal").hide();
        },
    });
    
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Technology', 'Skill rating'],
          ['PHP', 8],
          ['C#', 5],
          ['Bash', 7],
          ['nginx', 9],
          ['Go', 9]
        ]);

        var options = {
          title: 'Skillset distribution',
          pieHole: 0.2,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }
});