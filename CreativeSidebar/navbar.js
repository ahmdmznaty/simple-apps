


let class_name;
function active(class_name){
    let current = document.querySelector(".active");
    current.classList.remove("active");
    current.classList.add("nav_button");
    let newone = document.querySelector(`.${class_name}`);
    newone.classList.remove("nav_button");
    newone.classList.add("active");
    // 00000000000000000000000000000000000000000000000000000000
    let old_back = document.querySelector(".back");
    old_back.classList.remove("back");
    let new_back = document.querySelector(`.${class_name} .back_temp`);
    new_back.classList.add("back");
    // 00000000000000000000000000000000000000000000000000000000
}



























