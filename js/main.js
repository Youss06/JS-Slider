var i= 0;
var image= [];
var temps= 2000;

image[0]= '../img/slider1.jpg'
image[1]= '../img/slider2.jpg'
image[3]= '../img/slider3.jpg'

function carousel(){
  document.getElementsByTagName('img').src=image[i]
}
