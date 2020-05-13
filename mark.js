const box = document.querySelector(".box"),
 fruit = document.querySelector(".fruit"),
 input = box.querySelector("input");

const local = "savehere";
let idList = [];

function filterFN(that){
    return that.id !== parseInt(event.target.parentNode.id);
}

function delBtn(event){
    const target = event.target.parentNode;
    fruit.removeChild(target);
    const removeList = idList.filter(filterFN);
    console.log(removeList);
    idList = removeList;
    localStorage.setItem(local,JSON.stringify(idList));
}

function print(text){
    const li = document.createElement("li"),
     span = document.createElement("span"),
     btn = document.createElement("button");
    const plusId = idList.length + 1;
    span.innerText = text;
    btn.innerText = `Del`;
    li.appendChild(span);
    li.appendChild(btn);
    li.id = plusId;
    fruit.appendChild(li);
    btn.addEventListener("click",delBtn);
    const theList = {
        text : text, id : idList.length + 1
    }
    idList.push(theList);
    localStorage.setItem(local,JSON.stringify(idList));
    
}

function handle(event){
    event.preventDefault();
    const enterValue = input.value;
    print(enterValue);
    input.value = "";
}

function addList(){
  box.addEventListener("submit",handle);
}
function saveList(){
    const loadingD = localStorage.getItem(local);
    const loadingint = JSON.parse(loadingD);
    if (loadingD !== null){
        loadingint.forEach(function log(it){
            print(it.text)
        })
    }
}

function init(){
    saveList();
    addList();  
}
init();