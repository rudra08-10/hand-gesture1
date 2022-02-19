Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="printing" src="'+data_uri+'">';
    });
}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/xQRttb4CE/model.json',modelLoaded);

function modelLoaded()
{
    console.log('model loaded');
}

function predict()
{
    img=document.getElementById('printing');
    classifier.classify(img,gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result1").innerHTML=results[0].label;
        document.getElementById("result2").innerHTML=results[1].label;
        
        if(results[0].label=="amazing")
        {
            document.getElementById("emoji1").innerHTML="&#128076";
        }

        if(results[0].label=="best")
        {
            document.getElementById("emoji1").innerHTML="&#128077";
        }

        if(results[0].label=="victory")
        {
            document.getElementById("emoji1").innerHTML="&#9996";
        }

        if(results[1].label=="amazing")
        {
            document.getElementById("emoji2").innerHTML="&#128076";
        }

        if(results[1].label=="best")
        {
            document.getElementById("emoji2").innerHTML="&#128077";
        }

        if(results[1].label=="victory")
        {
            document.getElementById("emoji2").innerHTML="&#9996";
        }
    }
}