// Create the reference variable of the canvas using fabric.Canvas()

var canvas = new fabric.Canvas("myCanvas");

// Define the starting width and height of the block images

block_width=30;
block_height=30;

// Define the starting x and y coordinates for the player
player_x=0;
player_y=0;


// Define a variable named player_object to store object of the player image
var player_object="";
var block_object="";

// Add a function named player_update() to add the player image
function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(player_object);
    })
}






// Add a function named new_image() to add the different images as per the specific keys pressed
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y, 
            left:player_x
        });
        canvas.add(block_object);
    })
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == "80") {
        console.log("P & shift pressed together");
        block_width = block_width + 10;
        block_height += 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    
    if (e.shiftKey == true && keypressed == "77") {
        console.log("M & shift pressed together");
        block_width = block_width - 10;
        block_height -= 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (keypressed == "37") {
        console.log("left");
        left();
    }

    if (keypressed == "38") {
        console.log("up");
        up();
    }

    if (keypressed == "39") {
        console.log("right");
        right();
    }

    if (keypressed == "40") {
        console.log("down");
        down();
    }

    if (keypressed == "87") {
        console.log("W");
        new_image("wall.jpg");
    }

    if (keypressed == "71") {
        console.log("G");
        new_image("ground.png");
    }

    if (keypressed == "76") {
        console.log("L");
        new_image("light_green.png");
    }

    if (keypressed == "84") {
        console.log("T");
        new_image("trunk.jpg");
    }

    if (keypressed == "82") {
        console.log("R");
        new_image("roof.jpg");
    }

    if (keypressed == "89") {
        console.log("Y");
        new_image("yellow_wall.png");
    }

    if (keypressed == "68") {
        console.log("D");
        new_image("dark_green.png");
    }

    if (keypressed == "85") {
        console.log("U");
        new_image("unique.png");
    }

    if (keypressed == "67") {
        console.log("C");
        new_image("cloud.jpg");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_height;
        console.log("blockimageheight = " + block_height);
        console.log("When Up Arrow Is Pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_height;
        console.log("blockimageheight = " + block_height);
        console.log("When Down Arrow Is Pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x -= block_width;
        console.log("blockimagewidth = " + block_width);
        console.log("When Left Arrow Is Pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x += block_width;
        console.log("blockimagewidth = " + block_width);
        console.log("When Right Arrow Is Pressed x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}