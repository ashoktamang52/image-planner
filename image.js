"use strict";

window.onload = function() {
    $('add').onclick = add;
    $('delete').onclick = remove;
};

function add() {
    if (imageExists($("url").value)) {
        console.log("image exists in the blank area");
    } else {
        var image = document.createElement("img");
        image.src = $("url").value;
        console.log(image.src);
        image.className = "image";

        // MouseHover
        image.observe("mouseover", zoomIn);
        image.observe("mouseout", zoomOut)

        // Image tag is created, then added inside blank area.
        // the tag is removed when the image fails to load.
        // Causes an undesired effect on the tag.
        image.onerror = function() {
            this.remove();
        };
        $("blank_area").appendChild(image);
    }
    

}

function remove() {
    alert("delete");
}

function zoomIn() {
    new Effect.Scale(this, 100, {
        scaleMode: {
            originalHeight: 500,
            originalWidth: 500
        },
        scaleFromCenter: true
    });
}

function zoomOut() {
    new Effect.Scale(this, 100, {
        scaleMode: {
            originalHeight: 100,
            originalWidth: 100
        },
        scaleFromCenter: true
    });
}

function imageExists(imageUrl) {
    var images = $$(".image");

    var imageExist = false;
    // todo: find the better solution.
    var dummyImage = document.createElement("img");
    dummyImage.src = imageUrl;
    for (var i = 0; i < images.length; i++) {
        if (images[i].src = dummyImage.src) {
            imageExist = true;
            break;
        }
    }
    return imageExist;
}

