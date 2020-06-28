function addItem() {
    var docObj = document.getElementById("JS-item-name");
    var itemName = docObj.value;
    if (itemName !== "") {
        var ul = document.getElementById("JS-item-list");
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.className = "delete";
        span.appendChild(document.createTextNode('-'));
        span.addEventListener('click', function (event) {
            removeItem(event.target);
        });
        var name = document.createTextNode(itemName);
        li.appendChild(span);
        li.appendChild(name);
        ul.appendChild(li);
    } else {
        alert('Input is empty')
    }
}

function removeItem(clickedElement) {
    if (!clickedElement) {
        return false
    }
    // console.log(clickedElement.parentNode);
    clickedElement.parentNode.remove();
}
