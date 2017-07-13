var images = document.getElementsByTagName('img');
var index = 0 ;

setInterval(suivant, 2000);

function suivant(){
  console.log(index);
  images[index].style.display="none";
  if (index==images.length-1) {
    index=0;
    images[index].style.display="block";
  } else {
    index++;
    images[index].style.display="block";
  }
}


function precedent() {
   images[index].style.display="none";
   if (index==0) {
     index=2;
     images[index].style.display="block";
   } else {
    index--;
    images[index].style.display="block";
  }
}
