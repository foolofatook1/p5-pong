/*
 * Skeleton of a ball bouncing /game/.
 * Keith O'Hara <kohara@bard.edu>
 */
var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;
var paddle_step_y;
var paddle2_y;
var paddle3_x, paddle3_y;
var paddle3_w, paddle3_h;
var paddle4_x;
var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;
var x;
var y;
var z;

function setup() {
    createCanvas(600, 632);
    paddle_h = 16;
    paddle3_h = 6 * paddle_h;
    paddle_w = 6 * paddle_h;
    paddle3_w = 16;
    paddle_x = width / 2;
    paddle3_x = 0;
    paddle4_x = width - paddle3_w;
    paddle_y = height - paddle_h;
    paddle2_y = 32;
    paddle3_y = height / 2;
    paddle_step = 0;
    paddle3_step = 0;
    ball_r = 13;
    x = 0;
    y = 3;
    reset();
}

function draw() {
    background(196);
    textSize(32);
    textFont("monospace");
    fill(2, 224, 50);
    //score
    text("Score:", 25, 25);
    text(x, 150, 25);
    if (x = x + 1 && x = x * 5){
        y = y + 1;
    }
    // how do i make the lives go up when the score reaches 5?
    //lives
        text("Lives:", 350, 25);
    text(y, 475, 25);
    if (y <= 0) {
        y = 3;
        x = 0;
    }
    // move paddles on X axis
    //paddle_x += (mouseX - paddle_x) * .1;
    paddle_x = paddle_x + paddle_step;
    //move paddles on Y axis
    paddle3_y = paddle3_y + paddle3_step
        // hitting paddle1?
    if (ball_y + ball_r > paddle_y) {
        if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
            ball_y_step = -ball_y_step;
            ball_y = paddle_y - ball_r;
            x = x + 1;
        }
        else if (ball_y + ball_r > paddle_y) {
            y = y - 1;
            reset();
        }
    }
    // hitting paddle2?
    if (ball_y + ball_r < paddle2_y + paddle_h + ball_r) {
        if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
            ball_y_step = random(1, 3);
            ball_y = paddle2_y + paddle_h + ball_r;
            x = x + 1;
        }
        else if (ball_y + ball_r < paddle2_y + paddle_h) {
            y = y - 1
            reset();
        }
    }
    // hitting paddle3?
    if (ball_x + ball_r < paddle3_x + paddle3_w + ball_r) {
        if (ball_y >= paddle3_y && ball_y <= paddle3_y + paddle3_h) {
            ball_x_step = 3;
            ball_x = paddle3_x + paddle3_w + ball_r;
            x = x + 1;
        }
        else if (ball_x + ball_r < paddle3_x + paddle3_w + ball_r) {
            y = y - 1;
            reset();
        }
    }
    // hitting paddle4?
    if (ball_x + ball_r > paddle4_x) {
        if (ball_y >= paddle3_y && ball_y <= paddle3_y + paddle3_h) {
            ball_x_step = -3;
            ball_x = paddle4_x - ball_r;
            x = x + 1;
        }
        else if (ball_x + ball_r > paddle4_x) {
            y = y - 1;
            reset();
        }
    }
    // move ball by ball_x_step and ball_y_step
    ball_x = ball_x + ball_x_step;
    ball_y = ball_y + ball_y_step;
    //draw ball
    noStroke();
    fill(196, 0, 0);
    ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);
    // draw paddle
    stroke(24);
    fill(64);
    rect(paddle_x, paddle_y, paddle_w, paddle_h);
    //draw paddle2
    stroke(24);
    fill(64);
    rect(paddle_x, paddle2_y, paddle_w, paddle_h);
    //draw paddle3
    stroke(24);
    fill(64);
    rect(paddle3_x, paddle3_y, paddle3_w, paddle3_h);
    //draw paddle4
    stroke(24);
    fill(64);
    rect(paddle4_x, paddle3_y, paddle3_w, paddle3_h);
}

function reset() {
    ball_x = random(ball_r, width - ball_r);
    ball_y = random(ball_r, height / 2);
    ball_x_step = random(-3, 3);
    ball_y_step = random(1, 3);
    x = 0
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        paddle_step = -3;
    }
    else if (keyCode == RIGHT_ARROW) {
        paddle_step = 3;
    }
    else if (keyCode == UP_ARROW) {
        paddle3_step = -3
    }
    else if (keyCode == DOWN_ARROW) {
        paddle3_step = 3;
    }
    else if (key == ' ') {
        reset();
    }
}

function keyReleased() {
    paddle_step = 0;
    paddle3_step = 0;
}
