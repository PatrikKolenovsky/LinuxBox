function addItem() {
    var docObj = document.getElementById("JS-item-name");
    var itemName = docObj.value;
    if (itemName !== "") {
        var ul = document.getElementById("JS-item-list");
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.className = "delete";
        span.appendChild(document.createTextNode('-'));

        var name = document.createTextNode(itemName);

        li.appendChild(span);
        li.appendChild(name);
        ul.appendChild(li);
    } else {
        alert('Input is empty')
    }
}

document.addEventListener('click', function() {
    removeItem();
});

function removeItem() {

    var btn = document.getElementsByClassName('delete');

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function (e) {
            e.currentTarget.parentNode.remove();
        });
    }

}
