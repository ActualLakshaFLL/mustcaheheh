function preload() {

}

function setup(){
    canvas = createCanvas(600, 400);
    canvas.center()
    video = createCapture(VIDEO);
  video.size(600, 600);
  video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{  
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 600);
}

function take_snapshot(){
    save('mymustachehehhe.png');
}

function gotPoses(results)
{  
    if(results.length > 0)  {    console.log(results);   
         console.log("nose x = " + results[0].pose.nose.x);   
          console.log("nose y = " + results[0].pose.nose.y);  
        }
    }


