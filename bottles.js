img="";
status="";

function preload() 
{
    img=loadImage("bottles.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded() 
{
console.log("model loaded!");
status=true;
objectdetector.detect(img,gotResult);
}

function gotResult(error,results) 
{
if(error)
{
    console.error(error);
}
console.log(results);
}

function draw()
{
    image(img,0,0,640,420);
    fill("lightgreen");
    text("Bottles",45,75);
    noFill();
    stroke("lightgreen");
    rect(30,60,450,350);
}