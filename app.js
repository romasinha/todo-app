// Selecting elements

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

// Selecting class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Variables

let LIST = [], id = 0;

// get item from local storage

let data = localStorage.getItem("TODO");

//check of data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; //set the id toh the last one in the list
    loadList(LIST); //load the list toh the UI
}else{
    //if data isn' empty
    LIST = [];
    id = 0;
}

//load items to the UI
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// add item to local storage (this code is added where the list array is)

let data = localStorage.setItem("TODO", JSON.stringify(LIST));

//Displaying the date

const options= {
    weekday: "long", month: "short", day: "numeric"};

const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//Adding a to-do function

function addToDo(toDo, id, done, trash){
    if(trash){return;}

    const DONE = done ? CHECK: UNCHECK;
    const LINE = done ?  LINE_THROUGH: "";

    const item = `<li class ="item">
        <i class="fa ${DONE} co" job="complete" id="0" ></i>
        <p class = "text ${LINE}"> ${toDo} </p>
        <i class="fa fa-trash de" job="delete" id="0"></i>
    </li>`

    const position = "beforeend";


    list.insertAdjacentHTML(position, item);

    }
// add an item to the list when the user hits the enter key
document.addEventListener("keyup", function(event){

    if(event.key === "Enter"){
        const toDo = input.value;
        //if the input isn't empty
        if(toDo){
            addToDo(toDo);

            LIST.push({
                name: toDo,
                id: id,
                done: false,
                trash: false
            });

            // add item to local storage (this code is added where the list array is)

             localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        }
        input.value = "";

    }

        
});

//After a to do is completed

function completeToDo(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true; 
}

//To remove the todo

function removeTodo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

//target the items created dynamically

list.addEventListener("click", function(event){
    const element = event.target; //return the clicked element inside the list
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    }
    else if(elementJob == "delete"){
        removeTodo(element);
        
    }
    // add item to local storage (this code is added where the list array is)

    localStorage.setItem("TODO", JSON.stringify(LIST));
    }
)





 

