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

const tenedor1 = new producto("estocolmo", "estocolmo", "vega", "tenedor", 16000, "img/tenedor1.jpg", "12 pz.")
const tenedor2 = new producto("paris", "paris", "vega", "tenedor", 30000, "img/tenedor2.jpg", "12 pz.")
const tenedor3 = new producto("madrid", "madrid", "vega", "tenedor", 18000, "img/tenedor3.jpg", "12 pz.")
const tenedor4 = new producto("londres", "londres", "vega", "tenedor", 28000, "img/tenedor4.jpg", "12 pz.")
const tenedor5 = new producto("sydney", "sydney", "pulsiva", "tenedor", 1600, "img/tenedor5.jpg", "12 pz.")
const cuchillo1 = new producto("liverpool", "liverpool", "vega", "cuchillo", 23000, "img/cuchillo1.jpg", "12 pz.")
const cuchillo2 = new producto("oslo", "oslo", "vega", "cuchillo", 35000, "img/cuchillo2.jpg", "12 pz.")
const cuchillo3 = new producto("berlin", "berlin", "pulsiva", "cuchillo", 40000, "img/cuchillo3.jpg", "12 pz.")
const cuchillo4 = new producto("colonia", "colonia", "vega", "cuchillo", 48000, "img/cuchillo4.jpg", "12 pz.")
const cuchillo5 = new producto("barcelona", "barcelona", "vega", "cuchillo", 23000, "img/cuchillo5.jpg", "12 pz.")
const cuchara1 = new producto("salerno", "salerno", "pulsiva", "cuchara", 25000, "img/cuchara1.jpg", "12 pz.")
const cuchara2 = new producto("torino", "torino", "vega", "cuchara", 40000, "img/cuchara2.jpg", "12 pz.")
const cuchara3 = new producto("positano", "positano", "pulsiva", "cuchara", 30000, "img/cuchara3.jpg", "12 pz.")
const cuchara4 = new producto("florencia", "florencia", "pulsiva", "cuchara", 45000, "img/cuchara4.jpg", "12 pz.")
const cuchara5 = new producto("roma", "roma", "vega", "cuchara", 18000, "img/cuchara5.jpg", "12 pz.")
const set1 = new producto("siena", "siena", "vega", "set", 100000, "img/set1.jpg", "12 pz.")
const set2 = new producto("verona", "verona", "pulsiva", "set", 120000, "img/set2.jpg", "12 pz.")
const set3 = new producto("venecia", "venecia", "vega", "set", 135000, "img/set3.jpg", "12 pz.")
const set4 = new producto("catania", "catania", "vega", "set", 115000, "img/set4.jpg", "12 pz.")
const set5 = new producto("taormina", "taormina", "pulsiva", "set", 138000, "img/set5.jpg", "12 pz.")

const productosTenedores = [tenedor1, tenedor2, tenedor3, tenedor4, tenedor5]
const productosCuchillos = [cuchillo1, cuchillo2, cuchillo3, cuchillo4, cuchillo5]
const productosCucharas = [cuchara1, cuchara2, cuchara3, cuchara4, cuchara5]
const productosSet = [ set1, set2, set3, set4, set5]


let carrito = [];

const contenedorCucharas = document.getElementById("contenedorCucharas");