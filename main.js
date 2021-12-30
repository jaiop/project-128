song_1 = " ";
song_2 = " ";

song_1_status = " ";
song_2_status = " ";

scoreRightWrist = 0;
scoreleftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;
function preload()
{
    song_1 = loadSound("Young Shahrukh - Tesher.mp3");
    song_2 = loadSound("Whoopty Song Download Mp3 2021(SongsZilla.Net).mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.position(350,200);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is initaialized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        rightWristX = results[0].pose.rightWrist.x 
        rightWristY = results[0].pose.rightWrist.y
        console.log("right wrist x = " + rightWristX + "right wrist x = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x 
        leftWristY = results[0].pose.leftWrist.y
        console.log("left wrist x = " + leftWristX + "left wrist x = " + leftWristY);
    }
  
}

function draw()
{
   image(video,0,0,600,500);
}
function play()
{
    song.play()
}