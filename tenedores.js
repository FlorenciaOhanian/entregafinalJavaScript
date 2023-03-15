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

const productosTenedores = [tenedor1, tenedor2, tenedor3, tenedor4, tenedor5]