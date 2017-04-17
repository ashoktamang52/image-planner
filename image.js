"use strict";

window.onload = function() {
    $('add').onclick = add;
    $('delete').onclick = remove;
    // global variable to store unique images / create unique 'img' nodes.
    this.images = [];
};

function add() {
    var images = window.images;
    if (imageExists($("url").value)) {
        console.log("already!");
    } else {
        // Create a img node and append it to global images array
        images.push(document.createElement("img"));
        console.log(window.images);
        var current_index = images.length - 1;
        images[current_index].src = $("url").value;
        images[current_index].className = "image";

        // MouseHover
        images[current_index].observe("mouseover", zoomIn);
        images[current_index].observe("mouseout", zoomOut)

        // Image tag is created, then added inside blank area.
        // the tag is removed when the image fails to load.
        // Causes an undesired effect on the tag.
        images[current_index].onerror = function() {
            this.remove();
        };

        $("blank_area").appendChild(images[current_index]);
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
    console.log($("blank_area").childElements());
    // var images = $$(".image");

    // var imageExist = false;
    // // todo: find the better solution.
    // var dummyImage = document.createElement("img");
    // dummyImage.src = imageUrl;
    // for (var i = 0; i < images.length; i++) {
    //     if (images[i].src = dummyImage.src) {
    //         imageExist = true;
    //         break;
    //     }
    // }
    // return imageExist;
    return false;
}

