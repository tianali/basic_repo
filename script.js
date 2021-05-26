console.log(document);
var firstElem = document.getElementById("first");
console.log(firstElem);
firstElem.innerHTML = "Let's order some food!";

console.log($);
console.log($());


$('h2').click(function(){
    $('#first').fadeOut();
})

$('button').click(function(){
    $(this).hide();
})