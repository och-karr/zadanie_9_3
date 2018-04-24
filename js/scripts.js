var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinosaurUpperCased = dinosaur.toUpperCase();
var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);
var textLength = textCharsAfter.length;
var partOfText = textCharsAfter.substr(0,textLength/2);
console.log(partOfText);