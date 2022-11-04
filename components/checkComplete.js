const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click",completeTask);
    return i;
  };
  
  //Immediately invoked function expresion IIFE
   const completeTask = (evento) => {
      const element = evento.target;//Aqui marcamos el objetivo para que sea unicamente al que esta apuntando
      element.classList.toggle('fas');
      element.classList.toggle('completeIcon');
      element.classList.toggle('far');
  };
  export default checkComplete;