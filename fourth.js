let button = document.getElementById('add-item-btn');

function add_element() {
    var el, s;
    el = document.getElementById('container');
    s= el.innerHTML;
    s=s+ '<div class="element">Element </div>';
    el.innerHTML=s;
}

button.onclick = add_element;