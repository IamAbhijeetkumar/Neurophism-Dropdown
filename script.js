var dropdown = document.getElementById('d');
var options = document.getElementById('o');
var input = document.getElementById('v');

dropdown.addEventListener('click', function () {
    this.classList.toggle('show');
})
options.addEventListener('click', function (event) {
    const listItem = event.target;
    const value = listItem.attributes.cName.value;
    input.value = value;
});