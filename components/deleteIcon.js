const deleteIcon = () =>{
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon","icon")
    i.addEventListener("click",deleteTask)
    return i;
}

const deleteTask =  (evento) =>{
    console.log("Eliminar tarea")
    const parent = evento.target.parentElement;//Apuntamos al elemento objetivo y a su padre el cual es card
    parent.remove();

}
export default deleteIcon;