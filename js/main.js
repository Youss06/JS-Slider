var slider = document.getElementsByTagName('img');
var index = 0 ;

setInterval(suivant, 2000);

function suivant(){
  console.log(index);
  slider[index].style.display="none";
  if (index==2) {
    index=0;
  } else {
    index++;
slider[index].style.display="block";
  }
}


function precedent() {
   slider[index].style.display="none";
   if (index==0) {
     index=2;
   } else {
    index--;
    slider[index].style.display="block";
  }
}
