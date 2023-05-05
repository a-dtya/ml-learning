let mobilenet;
let video;
let classifier;
let badge;
let trainButton;
let guess;
let fevicol;
function modelReady(){
    console.log("Model is ready")
}
function getResults(err,res){
    if(err){
        console.log("Not working")
    }else{
        console.log(res[0].label)
        
    }
}
function whileTraining(loss){
    //loss is the error, ml model works on numbers, if something is 80% badge, it means the loss is 0.2
    //the more images you use to train, the lesser the loss
    if(loss == null){
        console.log("Training Complete")
    }else{
        console.log(loss)
    }
    
}
function setup(){
    createCanvas(640,480)
    background(0)
    video = createCapture(VIDEO)
    video.hide()
    mobilenet = ml5.featureExtractor('MobileNet',modelReady)
    classifier = mobilenet.classification(video)
    badge=createButton('badge')
    badge.mousePressed(()=>{
        classifier.addImage('badge')
    })
    trainButton=createButton('train')
    trainButton.mousePressed(()=>{
        classifier.train(whileTraining)
    })
    guess=createButton('guess')
    guess.mousePressed(()=>{
        classifier.classify(getResults)
    })
    fevicol = createButton('fevicol')
    fevicol.mousePressed(()=>{
        classifier.addImage('fevicol')
    })
    
}
function draw(){
    image(video,0,0,width,height)
    
}