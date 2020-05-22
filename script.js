
document.querySelector("button").addEventListener("click",refreshFun);
function refreshFun(){
  var randomNumber1;
  randomNumber1=(Math.floor(Math.random()*6)+1);
  var randomNumber2;
  randomNumber2=(Math.floor(Math.random()*6)+1);

  var randomImage="dice"+randomNumber1+".png";
  var randomImageSource= 'images/'+randomImage;
  var image1=document.querySelectorAll("img")[0];
  image1.setAttribute("src",randomImageSource);

  var randomImage2="dice"+randomNumber2+".png";
  var randomImageSource2="images/"+randomImage2;
  var image2=document.querySelectorAll("img")[1];
  image2.setAttribute("src",randomImageSource2);

  if(randomNumber1>randomNumber2)
 {   document.querySelector("button").innerHTML="🚩Player 1 wins!";
 }
 else if(randomNumber1<randomNumber2)
 {   document.querySelector("button").innerHTML="Player 2 wins!🚩";
 }
 else
 { document.querySelector("button").innerHTML="It's a DRAW!🤦";
 }
}
