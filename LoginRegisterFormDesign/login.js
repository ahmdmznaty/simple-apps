



let sign_up_screen = document.getElementById("sign_up_screen");
let sign_in_screen = document.getElementById("sign_in_screen");
sign_up_screen.style.left = "50%";
sign_in_screen.style.left = "150%";

function go_sign_in_screen()
{
  "use strict"
  console.log("welcome");
  sign_up_screen.style.cssText = "left:-50%;animation:sign_up_disappear ease-in-out 0.5s;"
  sign_in_screen.style.cssText = "left:50%;animation:sign_in_appear ease-in-out 0.5s;"
  
  return false;
}

function go_sign_up_screen()
{
  "use strict"
  console.log("welcome");
  sign_up_screen.style.cssText = "left:50%;animation:sign_up_appear ease-in-out 0.5s;"
  sign_in_screen.style.cssText = "left:150%;animation:sign_in_disappear ease-in-out 0.5s;"
  
  return false;
}

