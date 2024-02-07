const fill=document.getElementById("input")
const button=document.getElementById("button")

let todo=[]

const addTodo=()=>{
    todo.push({nameOfTask:fill.value, completed:false})
    console.log(todo)
}

button.addEventListener("click", addTodo)