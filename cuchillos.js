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

const cuchillo1 = new producto("liverpool","Nombre: Liverpool", "Marca: Vega", "Precio: 23000", "img/cuchillo1.jpg", "12 pz.")
const cuchillo2 = new producto("oslo", "Nombre: Oslo", "Marca: vega", "Precio: 35000", "img/cuchillo2.jpg", "12 pz.")
const cuchillo3 = new producto("berlin", "Nombre: Berlin", "Marca: Pulsiva", "Precio: 40000", "img/cuchillo3.jpg", "12 pz.")
const cuchillo4 = new producto("colonia", "Nombre: Colonia", "Marca: Vega",  "Precio: 48000", "img/cuchillo4.jpg", "12 pz.")
const cuchillo5 = new producto("barcelona", "Nombre: Barcelona", "Marca: Vega", "Precio: 23000", "img/cuchillo5.jpg", "12 pz.")

const productosCuchillos = [cuchillo1, cuchillo2, cuchillo3, cuchillo4, cuchillo5]

let carrito = [];

const contenedorCuchillos = document.getElementById("contenedorCuchillos");

const mostrarProductos = () => {
    productosCuchillos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-5", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div>
                            <img src= " ${producto.img}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title"> ${producto.nombre} </h5>
                                <p class="card-text"> ${producto.marca}</p>
                                <p class="card-text"> ${producto.precio}</p>
                                <p class="btn btn-dark"> Agregar a carrito </p>
                            </div>`
        contenedorCuchillos.appendChild(card);
    })
}

mostrarProductos();