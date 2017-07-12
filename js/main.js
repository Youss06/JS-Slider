var images = document.getElementsByTagName('img');
var index = 0 ;

setInterval(2000);

function suivant(){
  console.log(index);
  images[index].style.display="none";
  if (index==2) {
    index=0;
  } else {
    index++;
images[index].style.display="block";
  }
}


function precedent() {
   images[index].style.display="none";
   if (index==0) {
     index=2;
   } else {
    index--;
    images[index].style.display="block";
  }
}
