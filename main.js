function preload() {
    // img=loadImage("")
    }
    
    function setup() {
    canvas = createCanvas(640,480);
      canvas.position(450,250);
      video = createCapture(VIDEO);
      video.hide();
      tint_color= "";

    }
    
    function draw() {
    image(video,20,20,600,440);
    tint(tint_color);
    fill(255,102,204);
    stroke(255,102,204);
    circle(0,0,200);
    circle(630,0,200);
    circle(0,480,200);
    circle(630,480,200);
    fill(58,36,58);
    stroke(58,36,58);
    rect(0,0,640,20);
    rect(0,0,20,480);
    rect(0,460,640,20);
    rect(620,0,640,480);

    }
     
    function take_snapshot(){
save("Filter_Image.png");
    }

    function  filter_tint(){
        tint_color=document.getElementById("Input").value;
    }