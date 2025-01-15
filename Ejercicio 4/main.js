/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
const buttonClick = document.createElement("button")
buttonClick.id = "btnToClick" //le añadimos la id
buttonClick.textContent = "Click Me" // le añadimos el texto

buttonClick.addEventListener("click", (event) => { //añadimos el evento
    console.log("Información del evento: ", event)
})

document.body.appendChild(buttonClick)

/* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */
const inputs = document.querySelectorAll("input")

for (const input of inputs) {
    input.addEventListener("focus", (event) => {
        console.log("Valor del input: ",input.value)
    })
}


/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */
const inputs2 = document.querySelectorAll("input")

for (const input2 of inputs2) {
    input2.addEventListener("input", () => {
        console.log("Valor actual del input: ", input2.value)
    })
}

/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums. */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const listaAlbums = document.createElement("ul") //creamos la lista
for (let album of albums) {
    const elementalbum = document.createElement("li") //iteramos en el array para crear los li
    elementalbum.textContent = album //el texto del li es el nombre del album
    listaAlbums.appendChild(elementalbum) // añadimos a la lista todos los li
}
document.body.appendChild(listaAlbums)// añadimos la lista al body del html
