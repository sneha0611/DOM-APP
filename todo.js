const form = document.getElementById('form');
const input = document.getElementById('input');
const todo = document.getElementById('todo');
const button = document.getElementById('button')
let todolist=[];


form.addEventListener("submit",function(e){
    e.preventDefault()
     console.log("submit");
     addtodo()
     render()
})
 

function addtodo(){
    const newtodo=input.value;
    console.log(newtodo)
    if(!newtodo) return;

    let data={
        text:newtodo,
        complete:true
    }
    todolist.push(data)
    console.log(todolist)
    render()

}
function render(){
    todo.innerHTML=null;
    for(let i=0;i<todolist.length;i++){
        const item= document.createElement("li");

        const checkbox=document.createElement("input")
        checkbox.type="checkbox";



        checkbox.addEventListener("click",function(e){
            todolist[i].complete=e.target.checked;
            if(todolist[i].complete){
                item.classList.add("completed");
                item.classList.remove("uncomplete");
                checkbox.checked=todolist[i].complete;
            }else{
                item.classList.add("uncompleted");
                item.classList.remove("complete");
                checkbox.checked=todolist[i].complete;

            }
        })

        const text=document.createElement("p");
        text.innerText=todolist[i].text;



        const button=document.createElement("button");
        button.innerText="X"

          button.addEventListener("click",function(e){
              todolist.splice(i,1);
              render();

          })

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        todo.appendChild(item);
          input.value=null;
        }
}

    
    

