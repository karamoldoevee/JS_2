let container = document.getElementById('container');

while (true) {
    container.innerHTML = '<div class="element">Element 1</div>';
    container.innerHTML = container.innerHTML +  '<div class="element">Element 2</div>' + '<div class="element">Element 3</div>'
    + '<div class="element">Element 4</div>' + '<div class="element">Element 5</div>';
    break
}
console.log(container);