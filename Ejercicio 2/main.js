//2.1 Inserta dinamicamente en un html un div vacio con javascript. Inserto el div en el body del html
const divisor = document.createElement("div")
document.body.appendChild(divisor)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const parrafo = document.createElement("p") //el div lo cree en el 2.1, ahora creo un p y lo meto dentro
parrafo.textContent = "Este p va dentro del primer div"

//insertar el párrafo dentro del div
divisor.appendChild(parrafo)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divisor2 = document.createElement("div")

for (let i = 1; i <=6; i++) { //hacemos un for para dar 6 vueltas al programa
    const parrafo2 = document.createElement("p") //creamos el p
    parrafo2.textContent = `Este es el párrafo número ${i}` //añadimos texto a los párrafos
    divisor2.appendChild(parrafo2) //añadimos los parrafos al div
}
//agregamos el div al body
document.body.appendChild(divisor2)

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const parrafoDinamico = document.createElement("p")
parrafoDinamico.textContent = "Soy dinámico"
document.body.appendChild(parrafoDinamico)

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Element = document.querySelector(".fn-insert-here")
h2Element.textContent = "Wubba Lubba dub dub"

/* 2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.    
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
 */

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const listaDesordenada = document.createElement("ul") //creamos el ul

for (let app of apps) { //for of para recorrer el array
    const elementoLista = document.createElement("li") //creamos un li de nombre elementolista
    elementoLista.textContent = app //metemos el nombre de la app como texto en el elementolista
    listaDesordenada.appendChild(elementoLista) //insertamos el li en el ul
}
document.body.appendChild(listaDesordenada)

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsRemove = document.querySelectorAll(".fn-remove-me")

for (const element of elementsRemove) {
    element.remove()
}

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
Recuerda que no solo puedes insertar elementos con .appendChild. */
const parrafoUltimo = document.createElement("p")
parrafoUltimo.textContent = "Voy en medio!!!"

divisor.parentNode.insertBefore(parrafoUltimo, divisor2) //esto lo mete entre el primer div y el segundo que ya tenia creados.


