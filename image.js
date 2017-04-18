"use strict";

window.onload = function() {
    $('add').onclick = add;
    $('delete').onclick = remove;
    // global variable to store unique images / create unique 'img' nodes.
    this.images = [];
};

function add() {
    reset_error_message();
    var images = window.images;
    if (imageExists($("url").value)) {
        error_message("Image already exists.");
    } else {
        // Create a img node and append it to global images array
        images.push(document.createElement("img"));
        console.log(window.images);
        var current_index = images.length - 1;
        images[current_index].src = $("url").value;
        images[current_index].className = "image";

        // mouse events
        images[current_index].observe("mouseover", zoomIn);
        images[current_index].observe("mouseout", zoomOut)
        images[current_index].onclick = showImageUrl;

        // Image tag is created, then added inside blank area.
        // the tag is removed when the image fails to load.
        // Causes an undesired effect on the tag.
        images[current_index].onerror = function() {
            this.remove();
            images.pop();
            error_message("Image URL is invalid.");
        };

        $("blank_area").appendChild(images[current_index]);
        $("url").clear();
    }
}

function remove() {
    reset_error_message();
    var existing_images = $("blank_area").childElements();
    var len = existing_images.length;
    var imageExist = false;
    if (len > 0) {
        var dummyImage = document.createElement("img");
        dummyImage.src = $("url").value;
        for (var i = 0; i < len; i++) {
            if (existing_images[i].src == dummyImage.src) {
                existing_images[i].remove();
                imageExist = true;
                $("url").clear();
                break;
            }
        }
    };
    if (!imageExist) {
        error_message("Image Url is invalid or No Image in the blank area.");
    }
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
    var existing_images = $("blank_area").childElements();
    var len = existing_images.length;
    var imageExist = false;
    if (len < 1) {
        return false;
    }
    var dummyImage = document.createElement("img");
    dummyImage.src = imageUrl;
    for (var i = 0; i < len; i++) {
        if (existing_images[i].src == dummyImage.src) {
            imageExist = true;
            break;
        }
    }
    return imageExist;
}

function error_message(message) {
    console.log("goes here?");
    var log = document.createElement("p");
    log.innerHTML = message;
    $('control').appendChild(log);
    $("url").clear();
    
}

function reset_error_message() {
    var log = document.querySelector("div > p");
    if (log != null) {
        log.remove();
    }
}

function showImageUrl() {
    var image_name = this.src.split('/').pop();
    $("url").value = image_name;
}

