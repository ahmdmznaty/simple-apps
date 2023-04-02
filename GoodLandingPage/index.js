

let nav = document.getElementsByClassName("nav")[0];


/*
window.onscroll = function(){
  if(navTop == "0"){
    nav.style.backgroundColor = "none";
  }
  else{
    nav.style.backgroundColor = "red";
  }
}
*/

function scrolling(){
  let y = document.documentElement.scrollTop;
  if(y < 120){
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
  }
  else{
    nav.style.backgroundColor = "rgb(3 0 27)";
    nav.style.boxShadow = "0px 0px 12px 6px rgb(3 0 27)";
  }
}





function openClose(){
  let nav_open_close = document.getElementById("nav_open_close");
  let nav_buttons = document.getElementById("nav_buttons");
  nav_open_close_class = nav_open_close.className;
  nav_buttons_class = nav_buttons.className;
  
  if(nav_open_close_class == "nav_open"){
    document.getElementById("nav_open_close").className = "nav_close";
    document.getElementById("nav_buttons").className = "nav_buttons_phone";
  }
  else if(nav_open_close_class == "nav_close"){
    document.getElementById("nav_open_close").className = "nav_open";
    document.getElementById("nav_buttons").className = "nav_buttons";
  }
}



function header_one(){
  let bu_one = document.getElementById("bu1");
  let bu_two = document.getElementById("bu2");
  let bu_three = document.getElementById("bu3");

  let bu_one_classes = bu_one.classList;
  let bu_two_classes = bu_two.classList;
  let bu_three_classes = bu_three.classList;

  if(bu_one_classes[2] != "active"){
    document.getElementById("bu1").classList.add("active");
   document.getElementById("bu2").classList.remove("active");
   document.getElementById("bu3").classList.remove("active");

   document.getElementById("content1").style.display = "block";
   document.getElementById("content2").style.display = "none";
   document.getElementById("content3").style.display = "none";
  }

}



function header_two(){
  let bu_one = document.getElementById("bu1");
  let bu_two = document.getElementById("bu2");
  let bu_three = document.getElementById("bu3");

  let bu_one_classes = bu_one.classList;
  let bu_two_classes = bu_two.classList;
  let bu_three_classes = bu_three.classList;

  if(bu_two_classes[2] != "active"){
    document.getElementById("bu1").classList.remove("active");
   document.getElementById("bu2").classList.add("active");
   document.getElementById("bu3").classList.remove("active");

   document.getElementById("content1").style.display = "none";
   document.getElementById("content2").style.display = "block";
   document.getElementById("content3").style.display = "none";
  }

}



function header_three(){
  let bu_one = document.getElementById("bu1");
  let bu_two = document.getElementById("bu2");
  let bu_three = document.getElementById("bu3");

  let bu_one_classes = bu_one.classList;
  let bu_two_classes = bu_two.classList;
  let bu_three_classes = bu_three.classList;

  if(bu_three_classes[2] != "active"){
    document.getElementById("bu1").classList.remove("active");
   document.getElementById("bu2").classList.remove("active");
   document.getElementById("bu3").classList.add("active");

   document.getElementById("content1").style.display = "none";
   document.getElementById("content2").style.display = "none";
   document.getElementById("content3").style.display = "block";
  }

}






