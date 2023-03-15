class producto {
    constructor(id, nombre, marca, tipo, precio, img, unidades) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.tipo = tipo;
        this.precio = precio;
        this.img = img;
        this.unidades = unidades;
        this.cantidad = 1;
    }
}

const cuchillo1 = new producto("liverpool", "liverpool", "vega", "cuchillo", 23000, "img/cuchillo1.jpg", "12 pz.")
const cuchillo2 = new producto("oslo", "oslo", "vega", "cuchillo", 35000, "img/cuchillo2.jpg", "12 pz.")
const cuchillo3 = new producto("berlin", "berlin", "pulsiva", "cuchillo", 40000, "img/cuchillo3.jpg", "12 pz.")
const cuchillo4 = new producto("colonia", "colonia", "vega", "cuchillo", 48000, "img/cuchillo4.jpg", "12 pz.")
const cuchillo5 = new producto("barcelona", "barcelona", "vega", "cuchillo", 23000, "img/cuchillo5.jpg", "12 pz.")

const productosCuchillos = [cuchillo1, cuchillo2, cuchillo3, cuchillo4, cuchillo5]