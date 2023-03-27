

let addTask = document.querySelector('#addTask');
let textBox = document.querySelector('#form input');
let alltasks = document.querySelectorAll(".task");
let allchecks = document.querySelectorAll(".task .check");
addTask.onclick = () => {
    if(textBox.value){
        createTask(textBox.value)
        textBox.value = "";
    }
}



function createTask(text) {
    let tasks = document.querySelector("#tasks");
    let newTask = document.createElement("div");
    newTask.addEventListener("click", check)
    newTask.classList.add("task");
    tasks.appendChild(newTask);
    // ------------------------
    let taskCheck = document.createElement("input");
    taskCheck.setAttribute("type", "checkbox");
    taskCheck.checked = false
    taskCheck.classList.add("check");
    newTask.appendChild(taskCheck);
    // ------------------------
    let taskText = document.createElement("p");
    let Text = document.createTextNode(`  ${text}  `);
    let line = document.createElement("div");
    taskText.classList.add("text");
    line.classList.add("line");
    line.style.width = `0px`;
    taskText.appendChild(Text);
    taskText.appendChild(line);
    newTask.appendChild(taskText);
    // ------------------------
    let deleteTask = document.createElement("ion-icon");
    deleteTask.classList.add("deleteTask");
    deleteTask.setAttribute("onclick", "del(this)");
    deleteTask.setAttribute("name", "trash-outline");
    newTask.appendChild(deleteTask)
}

function clearToParent(selector, element) {
    if( !element.matches(selector) ) {
        return clearToParent(selector, element.parentElement)
    }
    return element
}

function check(event){
    let item = clearToParent(".task", event.target)
    let allbody = item.parentElement.parentElement;
    let checked = allbody.children[1];
    let tasks = allbody.children[0];
    if(!item.children[0].checked) {
        let text = item.children[1].innerText;
        item.children[0].checked = true;
        item.style.opacity = "0.5";
        item.style.border = "1px solid #eee";
        item.children[1].children[0].style.width = `${measureText(text, 18) + 8}px`;

        item.remove()
        checked.appendChild(item);
    }
    else {
        item.children[0].checked = false;
        item.style.opacity = "1";
        item.style.border = "1px solid #ddd";
        item.children[1].children[0].style.width = `0px`;
        
        item.remove()
        tasks.appendChild(item);
    }
}

function del(item){
    let parent = item.parentElement
    parent.parentNode.removeChild(parent);
}



textBox.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        if(textBox.value){
            createTask(textBox.value)
            textBox.value = "";
        }
    }
});





// _____________________________________
// _____ ready function | Not Mine _____
// _____________________________________
function measureText(str, fontSize = 10) {
  const widths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2796875,0.2765625,0.3546875,0.5546875,0.5546875,0.8890625,0.665625,0.190625,0.3328125,0.3328125,0.3890625,0.5828125,0.2765625,0.3328125,0.2765625,0.3015625,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.5546875,0.2765625,0.2765625,0.584375,0.5828125,0.584375,0.5546875,1.0140625,0.665625,0.665625,0.721875,0.721875,0.665625,0.609375,0.7765625,0.721875,0.2765625,0.5,0.665625,0.5546875,0.8328125,0.721875,0.7765625,0.665625,0.7765625,0.721875,0.665625,0.609375,0.721875,0.665625,0.94375,0.665625,0.665625,0.609375,0.2765625,0.3546875,0.2765625,0.4765625,0.5546875,0.3328125,0.5546875,0.5546875,0.5,0.5546875,0.5546875,0.2765625,0.5546875,0.5546875,0.221875,0.240625,0.5,0.221875,0.8328125,0.5546875,0.5546875,0.5546875,0.5546875,0.3328125,0.5,0.2765625,0.5546875,0.5,0.721875,0.5,0.5,0.5,0.3546875,0.259375,0.353125,0.5890625]
  const avg = 0.5279276315789471
  return str
    .split('')
    .map(c => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg)
    .reduce((cur, acc) => acc + cur) * fontSize
}




