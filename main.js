canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 100;
background_image = "racingbackground.jpeg";
car1_image = "car1.png";
car2_image = "car2.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38')
    {
        up1();
        console.log("up1");
    }

    if(keyPressed == '40')
    {
        down1();
        console.log("down1");
    }

    if(keyPressed == '37')
    {
        left1();
        console.log("left1");
    }
    
    if(keyPressed == '39')
    {
        right1();
        console.log("right1");
    }

    if(keyPressed == '87')
    {
        up2();
        console.log("up2");
    }

    if(keyPressed == '83')
    {
        down2();
        console.log("down2");
    }

    if(keyPressed == '65')
    {
        left2();
        console.log("left2");
    }
    
    if(keyPressed == '68')
    {
        right2();
        console.log("right2");
    }
}
function up1() {
    if(car1_y >= 0) {

        car1_y = car1_y - 10;
        console.log("When up arrow is pressed = " + car1_x+ " - " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function down1() {
    if(car1_y <= 550) {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function left1() {
    if(car1_x >= 0) {
        car1_x = car1_x - 10
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function right1() {
    if(car1_x <= 850) {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function up2() {
    if(car2_y >= 0) {

        car2_y = car2_y - 10;
        console.log("When up arrow is pressed = " + car2_x+ " - " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}
function down2() {
    if(car2_y <= 550) {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}
function left2() {
    if(car2_x >= 0) {
        car2_x = car2_x - 10
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}
function right2() {
    if(car2_x <= 850) {
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadBackground();
        uploadcar2();
    }
}


