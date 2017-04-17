"use strict";

window.onload = function() {
    $('add').onclick = add;
    $('delete').onclick = remove;
};

function add() {
    var image = document.createElement("img");
    image.src = $("url").value;
    console.log(image.src);
    image.className = "image";
    // Image tag is created, then added inside blank area.
    // the tag is removed when the image fails to load.
    // Causes an undesired effect on the tag.
    image.onerror = function() {
        this.remove();
    };
    $("blank_area").appendChild(image);

}

function remove() {
    alert("delete");
}

