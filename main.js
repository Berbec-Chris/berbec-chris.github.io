//Setup canvas (Slightly altered provided template because it wasn't working properly for me)
let canvas = document.querySelector('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let ctxt = canvas.getContext('2d');

/*Handling html's onclick = "" with a function named toggle(). This handles the on-click text shortening/extension.
Html was used for the text because JavaScript canvas displays text poorly.*/
let toggled = false;

function toggle(){
  if(!toggled){
    toggled = true;
    document.getElementById("SampleText").style.display = "None";//Hide the non-desired text
    return document.getElementById("ExtText").style.display = "Block";//Show the desired one
  }
  if(toggled){
    toggled = false;
    document.getElementById("SampleText").style.display = "Block";
    return document.getElementById("ExtText").style.display = "None";
  }   
}

//Declaring our constants for the canvas pattern.
let rX = 310;//rectangle displacement X
let rY = 125;//rectangle displacement Y
let rW = 161.8*4;//rectangle width
let rH = 100*4;//rectangle height

/*There is 2 separate patterns to draw, so we make 2 functions, drawS1() and drawS2(),
each displaying a different version of the drawing. Both are drawn by using a for-loop.
We set our x and y as (displacement * index number) to make the elements redraw themselves in a sequence.
We also by default activate function drawS1() to avoid starting with a blank canvas.
Also, a central, white square space bordered by a turquoise line to recieve the html 
text are independently from variable i drawn in the center of the canvas*/
function drawS1(){
  ctxt.fillStyle = "#331832";
  ctxt.fillRect(0,0, canvas.width, canvas.height);
  for (let i=0; i < 5; i++){
    let x = (rX*i);
    let y = (rY*i);

    ctxt.fillStyle = "#f7f7ef";
    ctxt.fillRect(x, y, rW, rH);
    ctxt.fillStyle = "#d5e9e6";
    ctxt.fillRect(rX*2, rY*2, rW, rH);
    ctxt.beginPath();
    ctxt.rect(rX*2, rY*2, rW, rH);
    ctxt.strokeStyle = "#f7f7ef";
    ctxt.stroke();
    ctxt.beginPath();
    ctxt.rect(rX*1, rY*1, rW, rH);
    ctxt.strokeStyle = "#d5e9e6";
    ctxt.stroke();
    ctxt.beginPath();
    ctxt.rect(rX*3, rY*3, rW, rH);
    ctxt.strokeStyle = "#d5e9e6";
    ctxt.stroke();

  }
}
drawS1();

/* Note : One mathematical trickery I'm mildly proud of, if I may say so myself, 
is the elegant way I manage to reposition the turquoise background pattern by altering     x = (rX*i) to x = (rX*(4-i)),
thus inverting the flow of index i upon its multiplier constant rX. Simple and elegant solution, I find. */
function drawS2(){
  ctxt.fillStyle = "#331832";
  ctxt.fillRect(0,0, canvas.width, canvas.height);
  for (let i=0; i < 5; i++){
    let x = (rX*(4-i));
    let y = (rY*i);

    ctxt.fillStyle = "white";
    ctxt.fillRect(x, y, rW, rH);
    ctxt.fillStyle = "#331832";
    ctxt.fillRect(rX*2, rY*2, rW, rH);
    ctxt.beginPath();
    ctxt.rect(rX*2, rY*2, rW, rH);
    ctxt.strokeStyle = "white";
    ctxt.stroke();
    ctxt.beginPath();
    ctxt.rect(rX, rY*3, rW, rH);
    ctxt.strokeStyle = "#331832";
    ctxt.stroke();
    ctxt.beginPath();
    ctxt.rect(rX*3, rY, rW, rH);
    ctxt.strokeStyle = "#331832";
    ctxt.stroke();
  }
}

/* Now comes the function handling the canvas graphics. Many hours of headscratching although now the solution is so simple
it almost hurts. The function shift() works like the previous one, by being linked to the html onclick handler.
With every click we alter the "shifted" state in a binary fashion. We at the same time clear the canvas of any previous drawing.
In return, the function is asked to redraw the according previously drawn pattern drawS1() or drawS2(). */
let shifted = false;

function shift(){
  if(shifted){
    shifted = false;
    ctxt.clearRect(0,0, canvas.width, canvas.height);
  return drawS1();
  }
  if(!shifted){
    shifted = true;
    ctxt.clearRect(0,0, canvas.width, canvas.height);
  return drawS2();
  }
}

JSON.stringify();
