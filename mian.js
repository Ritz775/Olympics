canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 2;
ctx.rect(190, 180, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(500, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(350, 290, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(450, 290, 40, 0, 2 * Math.PI);
ctx.stroke();
