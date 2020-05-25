const clear = document.querySelector(".clear");
const dateElement = document.querySelector(".date");
const list = document.querySelector("#list");
const input = document.querySelector("#item");i


function addToDo(toDo){
    const text = `<li class = "item">
        <i class="fa fa-circle-thin" aria-hidden="true"></i>
        <p class = "text"> ${toDo} </p>
        <i class="fa fa-trash" aria-hidden="true"></i>
    </li>`

    const position = "beforeend";


    list.insertAdjacentHTML(position, text);

}


// Adding a todo

const input = document.querySelector("#input");
input.addEventListener("keyup", function(event){

    if(event.keycode == 13){
        const toDo = input.value;
        if(todo){
            addToDo(todo);
        }
    }

        input.value = "";

});

 

