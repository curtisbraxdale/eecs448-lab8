let pic1 = "Skin_Splash_Classic_Twisted_Fate.jpg";
let pic2 = "Skin_Splash_Cutpurse_Twisted_Fate.jpg";
let pic3 = "Skin_Splash_High_Noon_Twisted_Fate.jpg";
let pic4 = "Skin_Splash_Musketeer_Twisted_Fate.jpg";
let pic5 = "Skin_Splash_Pulsefire_Twisted_Fate.jpg";
let pic6 = "Skin_Splash_Tango_Twisted_Fate.jpg";
let pic7 = "Skin_Splash_The_Magnificent_Twisted_Fate.jpg";
let pic8 = "Skin_Splash_Underworld_Twisted_Fate.jpg";
let pic9 = "Skin_Splash_Blood_Moon_Twisted_Fate.jpg";
let count = 1;

function next()
{   
    count = count + 1;
    if (count == 10){
        count = 1;
    }
    if(count == 1){
        document.getElementById("image").src = pic1;
    }
    if(count == 2){
        document.getElementById("image").src = pic2;
    }
    if(count == 3){
        document.getElementById("image").src = pic3;
    }
    if(count == 4){
        document.getElementById("image").src = pic4;
    }
    if(count == 5){
        document.getElementById("image").src = pic5;
    }
    if(count == 6){
        document.getElementById("image").src = pic6;
    }
    if(count == 7){
        document.getElementById("image").src = pic7;
    }
    if(count == 8){
        document.getElementById("image").src = pic8;
    }
    if(count == 9){
        document.getElementById("image").src = pic9;
    }
    console.log(count);
}

function previous()
{
    count = count - 1;
    if (count == 0){
        count = 9;
    }
    if(count == 1){
        document.getElementById("image").src = pic1;
    }
    if(count == 2){
        document.getElementById("image").src = pic2;
    }
    if(count == 3){
        document.getElementById("image").src = pic3;
    }
    if(count == 4){
        document.getElementById("image").src = pic4;
    }
    if(count == 5){
        document.getElementById("image").src = pic5;
    }
    if(count == 6){
        document.getElementById("image").src = pic6;
    }
    if(count == 7){
        document.getElementById("image").src = pic7;
    }
    if(count == 8){
        document.getElementById("image").src = pic8;
    }
    if(count == 9){
        document.getElementById("image").src = pic9;
    }
    console.log(count);
}