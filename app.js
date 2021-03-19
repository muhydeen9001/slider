var num = 0;

var images = [
    "images/mu1.jpg",
    "images/mu2.jpg"
];
var prev = document.querySelector("#prev-id");

var next = document.querySelector("#next-id");

var imageView = document.querySelector(".slider img");

next.addEventListener("click", function(){
 num++;
 if(num >= images.length){
     num = 0;
 }
 imageView.src = images[num];
 imageView.alt = images[num];

});

prev.addEventListener("click",function(){
    num--;
    if(num<0){
        num = images.length-1;
    }
    imageView.src = images[num];
    imageView.alt = images[num];

});