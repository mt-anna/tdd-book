var date = new Date(2009, 11, 5);
output(date.strftime("%Y"), 'blue');
output(date.strftime("%m"), 'blue');
output(date.strftime("%d"), 'blue');
output(date.strftime("%y"), 'blue');
output(date.strftime("%F"), 'blue');
output(date.strftime("%k"), 'blue'  );

function output (text, color) {
    var p = document.createElement("p");
    p.innerHTML = text;
    p.style.color = color;
    document.body.appendChild(p);
}