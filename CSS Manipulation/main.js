function updateColors(){
    var redBorder = document.getElementById("red-border").value;
    var greenBorder = document.getElementById("green-border").value;
    var blueBorder = document.getElementById("blue-border").value;
    var redBackground = document.getElementById("red-background").value;
    var greenBackground = document.getElementById("green-background").value;
    var blueBackground = document.getElementById("blue-background").value;

    console.log(redBorder);
    console.log(greenBorder);
    console.log(blueBorder);

    console.log(redBackground);
    console.log(greenBackground);
    console.log(blueBackground);

    console.log(document.getElementById("width").value + "px");

    document.getElementById("text").style.borderWidth = document.getElementById("width").value + "px";
    document.getElementById("text").style.borderStyle = "solid";

    document.getElementById("text").style.borderColor = "rgb(" + redBorder + "," + greenBorder + "," + blueBorder + ")";
    document.getElementById("text").style.backgroundColor = "rgb(" + redBackground + "," + greenBackground + "," + blueBackground + ")";
}