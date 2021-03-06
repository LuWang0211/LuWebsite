function robotInitialize() {
    drawRobot();

    var distanceFromCenterX = 80;
    var eyeCenterY = 120;

    let counter = 0;

    let shouldBlink = false;

    let angle = 0;

    window.setInterval(() => {
        counter++;

        // const angle = counter * 15 % 360
        // drawEye(200 - distanceFromCenterX, eyeCenterY, angle);
        // drawEye(200 + distanceFromCenterX, eyeCenterY, angle);

        if (counter % 3 == 0) {
            shouldBlink = !shouldBlink;
        } 

        drawEye(200 - distanceFromCenterX, eyeCenterY, angle, shouldBlink);
        drawEye(200 + distanceFromCenterX, eyeCenterY, angle, shouldBlink);

    }, 100);

    const canvas = document.getElementById('myCanvas');
    const canvasBoundingBox = canvas.getBoundingClientRect();

    const cavansCenterX = canvasBoundingBox.x + canvasBoundingBox.width / 2;
    const cavansCenterY = canvasBoundingBox.y + canvasBoundingBox.height / 2;

    // Trackmouse Position
    window.addEventListener('mousemove', (event) => {
    // canvas.addEventListener('mousemove', (event) => {
        const xDiff = (event.pageX - cavansCenterX);
        const yDiff = (cavansCenterY - event.pageY);

        angle = Math.atan2(yDiff, xDiff);

        // console.log(`Mouse location: ${event.pageX}, ${event.pageY}, ${cavansCenterX}, ${cavansCenterY}, ${angle}`);

        // drawEye(200 - distanceFromCenterX, eyeCenterY, angle, shouldBlink);
        // drawEye(200 + distanceFromCenterX, eyeCenterY, angle, shouldBlink);

    });


    
}



function drawRobot() {
    var distanceFromCenterX = 80;
    var eyeCenterY = 120;

    drawEye(200 - distanceFromCenterX, eyeCenterY);
    drawEye(200 + distanceFromCenterX, eyeCenterY);
    drawMouth();
    drawEyebrows(120, 40);
    drawEyebrows(280, 40);
}

function drawEye(eyeCenterX, eyeCenterY, angle = 0, shouldBlink) {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    let eyeWidth = 80;
    let pupilWidth = 20;

    ctx.beginPath();
    ctx.fillStyle = "black";
    // ctx.fillRect(eyeCenterX - eyeWidth / 2, eyeCenterY - eyeWidth / 2, eyeWidth, eyeWidth);
    ctx.arc(eyeCenterX, eyeCenterY, eyeWidth / 2 * 1.2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = shouldBlink ? 'black' : "white";

    const eyesize = eyeWidth / 2 * 0.8;

    let pupilCenterX = eyeCenterX, pupilCenterY = eyeCenterY;

    // let radianAngle = angle / 180 * Math.PI;
    let radianAngle = angle;

    pupilCenterX = eyeCenterX + Math.cos(radianAngle) * eyesize;
    pupilCenterY = eyeCenterY - Math.sin(radianAngle) * eyesize;

    // ctx.fillRect(pupilCenterX - pupilWidth / 2, pupilCenterY - pupilWidth / 2, pupilWidth, pupilWidth);
    ctx.arc(pupilCenterX, pupilCenterY, pupilWidth / 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}


function drawMouth() {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;
    ctx.moveTo(120, 200);
    ctx.lineTo(280, 200);
    ctx.moveTo(120, 200);
    ctx.lineTo(200, 250);
    ctx.moveTo(200, 250);
    ctx.lineTo(280, 200);
    ctx.stroke();
}

function drawEyebrows(EyebrowsX, EyebrowsY) {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;
    ctx.moveTo(EyebrowsX - 45, EyebrowsY + 5);
    ctx.lineTo(EyebrowsX, EyebrowsY - 5);
    ctx.moveTo(EyebrowsX, EyebrowsY - 5);
    ctx.lineTo(EyebrowsX + 45, EyebrowsY + 5);
    ctx.stroke();
}

