google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);


/*Построение графика*/
function drawChart(l, m, v) {
    {
    var data = new google.visualization.DataTable();
    var pk = [];
    pk = CountPkForChart(l, m, v);

    data.addColumn('number', 'X');
    data.addColumn('number', 'Pk');

        var max = v;
        for(var i=0; i <= max; i++) {
            data.addRows([[i, pk[i]]]);
        }
    }

var options = {
    hAxis: {
        title: 'K',
    },
    vAxis: {
        title: 'Pk',
    },
    colors: ['#8b00ff']
};

chart = new google.visualization.LineChart(document.getElementById('chart_div'));
chart.draw(data, options);
};

/*Сброс значений*/
function ClearChart() {

        document.getElementById('valuePt').innerHTML = "";
        chart.clearChart();
};

/*Отображение дополнительных величин*/

function AddPtValueToChart(l, m, v) {
    var pt = CountPtForChart(l, m, v);
    pt = pt.toFixed(3);
    var outputPt = "Pt = " + pt;
    document.getElementById('valuePt').innerHTML = outputPt;
};

function AddKValueToChart(l, m, v) {
    var k= CountKForChart(l, m, v);
    k=k.toFixed(3);
    var outputK= "K =" +k;
    document.getElementById('valueK').innerHTML = outputK;

}

function AddTValueToChart (l, m, v){
    var t= CountTForChart(l, m, v);
    t=t.toFixed(3);
    var outputT="T=" +t;
    document.getElementById('valueT').innerHTML = outputT;
}