

function mostrar(categoria){
    for(let a=0;a<4;a++){
        let pizza=document.querySelector('.contenido__pizza');
        pizza.classList.add("oculto");
        let chapatones=document.querySelector('.contenido__chapatones');
        chapatones.classList.add("oculto");
        let hamburguesas=document.querySelector('.contenido__hamburguesas');
        hamburguesas.classList.add("oculto");
        let otros=document.querySelector('.contenido__otros');
        otros.classList.add("oculto");

    }
    
   const productos=document.querySelector(categoria);

   console.log(categoria);
    if(productos.classList.contains("oculto")){
    
    productos.classList.remove("oculto");
    }
   
    
}

document.addEventListener("DOMContentLoaded",(event)=>{
    let button=document.querySelector(".layout__hamburguesa");
    console.log(button);
    let aside=document.querySelector(".menu__lista");
    let bars=document.querySelector(".fa-bars");
    let x=document.querySelector(".fa-x");
    button.addEventListener("click",(event)=>{
        console.log("Sergio");
        let visible=document.querySelector(".menu__lista--visible");
        console.log(visible);
        if(!visible){
            console.log("Hola1");
            aside.classList.remove("menu__lista--oculto");
            aside.classList.add("menu__lista--visible");
            bars.style.opacity=0;
            x.style.opacity=1;
        }else{
            console.log("Hola");
            aside.classList.remove("menu__lista--visible");
            aside.classList.add("menu__lista--oculto");
            bars.style.opacity=1;
            x.style.opacity=0;

        }
    })
});

