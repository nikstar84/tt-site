
function setBackground(id)
{
    id.style.background = "#ef7b00";
    var x = id.getElementsByTagName("p");
    var y = id.getElementsByTagName("li");
    for(i = 0; i<x.length; i++)
    {
        x[i].style.display = "block";
    }
    for(i = 0; i<y.length; i++)
    {
        y[i].style.display = "list-item";
    }
}

function resetBackground(id)
{
    id.style.background = "linear-gradient(90deg, #ef7b00 0%, #ef7b00 32%, #FFFFFF 100%)";
    var x = id.getElementsByTagName("p");
    var y = id.getElementsByTagName("li");
    for(i = 0; i<x.length; i++)
    {
        x[i].style.display = "none";
    }
    for(i = 0; i<y.length; i++)
    {
        y[i].style.display = "none";
    }
}