/*Вычисление факториала*/
function factorial(n) {
    var fac = 1;
    for (var i = 2; i <= n; i++) {
        fac *= i;
    }
    return fac;
}

/*Расчет параметров*/
function CountPk (l, m, v, k)
{
    var sum=0;
    var r=l/m;
    for( var i=0;i<=v;i++)
        sum+= Math.pow(r,i)/factorial(i);
    var pk=(Math.pow(r,k)/factorial(k))/sum;
    return pk;

}

function CountPt (l, m, v)
{
    var sum=0;
    var r=l/m;
    for( var i=0;i<=v;i++)
        sum+=Math.pow(r,i)/factorial(i);
    var pt=(Math.pow(r,v)/factorial(v))/sum;
    return pt;
}

function CountK (l, m, v)
{
    var k=0;
    for (var i=0;i<=v;i++)
    {
        k+=i*CountPk(l, m, v, i);
    }
    return k;
}

function CountT (l, m, v)
{
    var t;
    t= CountK(l, m, v)/l;
    return t;
}

/*Расчет параметра Pk для графика*/
function CountPkForChart(l, m, v) {
    var pk;
    pk = [];
    max=v;

    for(var i=0;i<=max;i++)
            {
                pk[i]=CountPk (l, m, v, i);
            }

    return pk;
}

/*Расчет параметров для вывода*/
function CountPtForChart(l, m, v) {
    var pt;
    pt = CountPt(l, m, v);
    return pt;
}

function CountKForChart (l, m, v)
{
    var k;
    k=CountK(l, m, v);
    return k;
}

function CountTForChart(l, m, v)
{
    var t;
    t=CountT(l, m, v);
    return t;
}

/* Построение графика, проверка введенных значений на условия, вывод найденных параметров*/
function Build()
{
    var form = document.forms.input;
    var l, m, v;
    l = +(form.elements.l.value);
    m = +(form.elements.m.value);
    v = +(form.elements.v.value);

    if( !((isNaN(l)) || (isNaN(m))|| (isNaN(v))))
    {
        if( (l > 0) && (m > 0) && (v > 0))
        {
            if((l/(v*m))<1)
            {
                if(isInteger(v))
                {
                        drawChart(l, m, v);
                        AddPtValueToChart(l, m, v);
                        AddKValueToChart(l, m, v);
                        AddTValueToChart(l, m, v);
                }
                else
                {
                    alert("Wrong numbers. V is not integer");
                }
            }
            else
            {
                alert("Wrong numbers. Try l/v*m <1");
            }
        }
        else
        {
            alert("Wrong numbers. Try > 0");
        }
    }

    else
    {
        alert("Not a number!");
    }
}




/*Проверка на целое число*/
function isInteger(num) {
    return (num ^ 0) == num;
}

/*Функция плавного показа блока*/
$(document).ready(function(){
    $('#fadeshow').click( function(){
        $('#chart_div').fadeIn();
        $('#valueK').fadeIn();
        $('#valueT').fadeIn();
        return false;
    });
});


/*Функция для плавного скрытия блока*/
$(document).ready(function(){
    $('#fadehide').click( function(){
        $('#chart_div').fadeOut();
        $('#valueK').fadeOut();
        $('#valueT').fadeOut();
        return false;
    });
});