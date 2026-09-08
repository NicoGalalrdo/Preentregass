const productos =[
{ prenda: "Remera", precio: 15000, marca: "Nike", talle: "M" },
{ prenda: "Pantalon", precio: 10000, marca: "Adidas", talle: "L"},
{ prenda: "Buzo", precio: 20000, marca: "Puma", talle: "XL"},
{ prenda: "Campero", precio: 25000, marca: "Topper", talle: "S"},
];

productos.forEach((elemento, index) => {
    console.log("Productos disponibles: " + elemento.prenda + " " + elemento.marca + " " + elemento.talle + " $" + elemento.precio);
});
console.table(productos)


const productosOferta = productos.map((elementos) => {
    return {prenda: elementos.prenda  , precio: elementos.precio * 0.5, marca: elementos.marca,  talle: elementos.talle}
});
console.log("Llevando mas de dos prendas te llevas un 50% de descuento en el total de tu compra quedando el precio de cada prenda en: ")
console.table(productosOferta)

let busquedaPrenda = prompt("Ingrese la prenda que desea buscar")

let prendaEncontrada = productos.find(
    (producto)=> 
        producto.prenda.toUpperCase().trim() == busquedaPrenda.toUpperCase().trim(),
);
console.log(prendaEncontrada)

if(prendaEncontrada){
    console.log("EL precio de la prenda es: $" + prendaEncontrada.precio);
}else{
    console.log("No hay prendas de ese tipo disponibles")
}

const carrito = productos.reduce((total, producto) => total + producto.precio, 0);
console.log("El total de tu compra es: $" + carrito)
