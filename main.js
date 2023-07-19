img="";
estatus="";
objetos=[];
function preload(){
    img=loadImage('autos.jpg');
}
function setup(){
    canvas=createCanvas(640, 420)
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status detectando dos objetos"
}
function modelloaded (){
    console.log("modelo cargado");
    estatus=true;
    objectdetector.detect(img,gotresults);
}
function gotresults (error,results){
    if (error) {
        console.error(error);
    }else  {
        console.log(results);
        objetos=results;
    }
}
function draw (){
    image(img,0,0,640,420);
    if (estatus != "") {
        for(i=0; i<objetos.length; i++){
            document.getElementById("status").innerHTML="status objeto detectado" ;
            fill("red");
            porcentaje=floor(objetos[i].confidence * 100);
            text(objetos[i].label+" "+porcentaje+"%",objetos[i].x+15,objetos[i].y+15);
            noFill();
            stroke("red");
            rect(objetos[i].x,objetos[i].y,objetos[i].width,objetos[i].height);
        }
    }
    
}