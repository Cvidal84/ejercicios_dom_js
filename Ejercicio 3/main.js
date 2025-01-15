//1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const listaPaises = document.createElement("ul")
for (let country of countries) {
    const elementCountry = document.createElement("li")
    elementCountry.textContent = country
    listaPaises.appendChild(elementCountry)
}
document.body.appendChild(listaPaises)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementoEliminado = document.querySelector(".fn-remove-me")
if (elementoEliminado) {
    elementoEliminado.remove()
}//es mejor hacerlo asi porque si esta ese elemento lo borra sino no hace nada.

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const listaCoches = document.createElement("ul")
for (let car of cars) {
    const elementCar = document.createElement("li")
    elementCar.textContent = car
    listaCoches.appendChild(elementCar)
}
//ahora tengo que seleccionar el div
const divPrintHere = document.querySelector('div[data-function="printHere"]')

divPrintHere.appendChild(listaCoches)

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen. */
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
//creo el divisor donde irá todo
const Divisor = document.createElement("div")
for (let country2 of countries2) {  //iterar sobre el array para crear los h4
    const elementH4 = document.createElement("h4")
    elementH4.textContent = country2.title    

    const elementImg = document.createElement("img") //iterar para crear los img
    elementImg.src = country2.imgUrl 

    const countryDiv = document.createElement("div") //crea div individual para cada h4 y img
    countryDiv.appendChild(elementH4)
    countryDiv.appendChild(elementImg)

    Divisor.appendChild(countryDiv) //agrega el div al contenedor
}
document.body.appendChild(Divisor) //agrega el contenedor al body del html
