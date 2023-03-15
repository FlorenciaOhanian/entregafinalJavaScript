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


const set1 = new producto("siena", "siena", "vega", "set", 100000, "img/set1.jpg", "12 pz.")
const set2 = new producto("verona", "verona", "pulsiva", "set", 120000, "img/set2.jpg", "12 pz.")
const set3 = new producto("venecia", "venecia", "vega", "set", 135000, "img/set3.jpg", "12 pz.")
const set4 = new producto("catania", "catania", "vega", "set", 115000, "img/set4.jpg", "12 pz.")
const set5 = new producto("taormina", "taormina", "pulsiva", "set", 138000, "img/set5.jpg", "12 pz.")

const productosSet = [ set1, set2, set3, set4, set5]