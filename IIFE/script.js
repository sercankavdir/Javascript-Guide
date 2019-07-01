/*
* Lecture: IIFE
Creating private variable
Immediately Invoked Function Expression
*/
/*
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

//Parantezlerin içine yazmamızın sebebi javascript parserın 
//bunu expression olarak anlamasını sağlamak 
//data privicy sağladık bu sayede
//All we want to create is create a scope that is hidden from the outside scope
(function () {
        var score = Math.random() * 10;
        console.log(score >= 5);
})();

console.log(score);