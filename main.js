function inicio () {
    let name = prompt("Ingresa tu nombre")
    alert ("Hola " + name + " Bienvenido a nuestra tienda de ropa")
}

inicio()

class producto {
    constructor (nombre, precio, categoria ,stock, ofertaPorcentaje, oferta) {
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.stock = stock
        this.ofertaPorcentaje = ofertaPorcentaje
        this.oferta = oferta
    }
    
    ofertaProducto(){
        let precioOferta = this.precio - (this.precio * this.ofertaPorcentaje / 100)
        return precioOferta
    }
    
    fechaOferta(){
        console.log("El producto " + this.nombre + " Esta en oferta hasta el dia " + this.oferta)
    }
}

const producto1 = new producto ("Remera", 2000, "Hombre", 10, 10, "15/9/2026")
console.log(producto1)
console.log("Precio en oferta: $" + producto1.ofertaProducto())
producto1.fechaOferta()

const producto2 = new producto ("Pantalon", 1500, "Mujer", 20, 15, "20/9/2026") 
console.log(producto2)
console.log("Precio en oferta: $" + producto2.ofertaProducto())
producto2.fechaOferta()

const producto3 = new producto ("Campera", 5000, "Unisex", 15, 20, "30/9/2026")
console.log(producto3)
console.log("precio en oferta: $" + producto3.ofertaProducto())
producto3.fechaOferta()