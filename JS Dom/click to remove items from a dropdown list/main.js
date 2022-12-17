let items = document.getElementById("colorSelect");
let remained = document.getElementsByTagName("option");

let colors = "";
for (i=0; i<remained.length; i++) 
{
colors = colors + "\n" + remained[i].value;
}


alert("No. of items: " + items.length + colors);


function remove()
{
    items.remove(items.selectedIndex)
}

