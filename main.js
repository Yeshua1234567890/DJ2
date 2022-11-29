song="";

function preload(){
    song=loadSound("music.mp3");
}

scoreRightWrist=0;
scoreLeftWrist=0;

RightWristX=0;
RightWristY=0;

LeftWristX=0;
LeftWristY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded); 
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet esta inicializado')
}

function gotPoses(results){
    if(results.length>0)
    {
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist="+scoreRightWrist+"scoreLeftWrist"+leftWrist);
        
        rightWristX=results[0].pose.rightWrist.x;
        rightWristX=results[0].pose.rightWrist.y;
        console.log("rightWristX="rightWristX +"rightWristY"+rightWristY);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristX=results[0].pose.leftWrist.y;
        console.log("leftWristX="leftWristX+"leftWristY"+leftWristY);
    }
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000"); 
    stroke("#FF0000");

    if(scoreRightWrist>0.2)
    {
        circle(rightWristX,rightWristY,20);
    }
}


