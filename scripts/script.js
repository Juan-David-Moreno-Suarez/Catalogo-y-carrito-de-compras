// ! Construcción de los objetos de los productos
class Item {
    constructor({ id, nombre, categoria, precio, imagen, descripcion }) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}
const iphone14 = new Item({
  id: 1,
  nombre: "Iphone 14 Pro Max",
  categoria: "Smartphones",
  precio: 3199900,
  imagen: "img/iphone14promax.png",
  descripcion: "iPhone premium con gran pantalla, alto rendimiento y funciones avanzadas."
});

const galaxyS23Ultra = new Item({
  id: 2,
  nombre: "Samsung Galaxy S23 Ultra",
  categoria: "Smartphones",
  precio: 4399900,
  imagen: "img/samsungs23ultra.png",
  descripcion: "Smartphone gama alta con gran pantalla, potencia y cámara destacada."
});

const hpVictus = new Item({
  id: 3,
  nombre: "Hp Victus 15.6 I5 Rtx3050 8gb 512gb Ssd",
  categoria: "Computadores",
  precio: 2665845,
  imagen: "img/hpvictus.png",
  descripcion: "Portátil para gaming y productividad con i5, RTX 3050 y SSD 512GB."
});

const lenovoLegionpro = new Item({
  id: 4,
  nombre: "Notebook Lenovo Legion Pro 16 negro 32GB de Ram - 1TB SSD - Intel ULTRA 9 Color Negro",
  categoria: "Computadores",
  precio: 12000000,
  imagen: "img/lenovolegionpro.png",
  descripcion: "Portátil de alto rendimiento con 32GB RAM, 1TB SSD y pantalla 2K."
});

const ipad = new Item({
  id: 5,
  nombre: "Ipad Apple 11 pulgadas 128 GB | Chip A16",
  categoria: "Tablets",
  precio: 2039000,
  imagen: "img/ipad.png",
  descripcion: "iPad 11” con chip A16, ideal para estudiar, trabajar y entretenimiento."
});

const xiaomiTablet = new Item({
  id: 6,
  nombre: "Xiaomi Tablet Pad 7 8gb/256gb",
  categoria: "Tablets",
  precio: 1799900,
  imagen: "img/xiaomipad7.png",
  descripcion: "Tablet potente con 8GB RAM y 256GB, pensada para multitarea."
});

const jblTourSmart = new Item({
  id: 7,
  nombre: "JBL Tour Smart",
  categoria: "Audífonos",
  precio: 1774900,
  imagen: "img/jbltoursmart.png",
  descripcion: "Audífonos inalámbricos con buen sonido y cancelación de ruido."
});

const sonyWH1000XM5 = new Item({
  id: 8,
  nombre: "Sony WH-1000XM5",
  categoria: "Audífonos",
  precio: 2249900,
  imagen: "img/sony.png",
  descripcion: "Audífonos premium con excelente cancelación de ruido y gran audio."
});

const bose700 = new Item({
  id: 9,
  nombre: "Bose Bass Module 700",
  categoria: "Bocinas",
  precio: 4489900,
  imagen: "img/bose700.png",
  descripcion: "Subwoofer inalámbrico con graves potentes para cine y música."
});

const jblClip5 = new Item({
  id: 10,
  nombre: "Bocina Portátil JBL Clip 5 Bluetooth, Negro",
  categoria: "Bocinas",
  precio: 129900,
  imagen: "img/jblclip5.png",
  descripcion: "Bocina compacta y portátil con Bluetooth, ideal para salir."
});

const samsungGalaxyWatch8 = new Item({
  id: 11,
  nombre: "Reloj Samsung Galaxy Watch 8 44Mm Gris Oscuro",
  categoria: "Smartwatches",
  precio: 1299900,
  imagen: "img/samsungwatch8.png",
  descripcion: "Smartwatch con seguimiento de salud, deporte y notificaciones."
});

const appleWatchUltra3 = new Item({
  id: 12,
  nombre: "Apple Watch Ultra 3 Correa Alpine",
  categoria: "Smartwatches",
  precio: 4499900,
  imagen: "img/applewatchultra.png",
  descripcion: "Reloj premium resistente con funciones avanzadas de salud y deporte."
});
const items = [iphone14, galaxyS23Ultra, hpVictus, lenovoLegionpro, ipad, xiaomiTablet, jblTourSmart, sonyWH1000XM5, bose700, jblClip5, samsungGalaxyWatch8, appleWatchUltra3];

// ! Funciones para guardar la selección de productos

// ? Clave del carrito para guardar en localStorage
const KEY = "carrito";

//? Regresa los elementos guardados en el almacenamiento, o vacío si no hay nada
function getCartItems() {
    return JSON.parse(localStorage.getItem(KEY)) || {};
}

// ? Sube al localStorage los elementos seleccionados
function uploadCart(cart) {
    localStorage.setItem(KEY, JSON.stringify(cart));
}

// ? Agregar un item al carrito
function addItem(item) {
    const cart = getCartItems();
    const id = item.id;

    if (cart[id]) {
        cart[id].qty++;
    } else {
        cart[id] = { item: item, qty: 1 };
        alert("Agregado al carrito");
    }
    uploadCart(cart);
}

// ? Eliminar un item del carrito
function removeItem(item) {
    const cart = getCartItems();
    const id = item.id;
    if (cart[id]) {
        if (cart[id].qty > 1) {
            cart[id].qty--;
        } else {
            delete cart[id]
            alert("Eliminado del carrito");
        }
        uploadCart(cart);
    } else {
        alert("No hay elementos en el carrito")
    }
}
function showSubtotal() {
    const cart = Object.values(getCartItems());
    subtotal.replaceChildren();
    cart.forEach(ci => {
        const subtotalPrice = document.createElement("h4");
        subtotalPrice.textContent = "$ " + ci.item.precio.toLocaleString('es-ES') + " x " + ci.qty;
        subtotal.appendChild(subtotalPrice);
    });
}
function showTotal() {
    const cart = Object.values(getCartItems());
    const totalPrice = document.createElement("h1");
    const price = cart.reduce((sum, ci) => sum + ci.item.precio * ci.qty, 0);
    totalPrice.textContent = "$ " + price.toLocaleString('es-ES');
    total.replaceChildren();
    total.appendChild(totalPrice);
}

// ! Tarjeta y contenido del item

function card(obj, parent, qty = null) {
    let isCheck = Boolean(getCartItems()[obj.id]);
    // ? Contenedor
    const card = document.createElement("article");
    card.className = "card";

    // ? Contenido
    const img = document.createElement("img");
    img.className = "img";
    img.src = obj.imagen;

    const content = document.createElement("section");
    content.className = "card-content";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = obj.nombre;

    const desc = document.createElement("p");
    desc.textContent = obj.descripcion;

    const footer = document.createElement("section");
    footer.className = "card-footer";

    const price = document.createElement("h2");
    price.textContent = "$ " + obj.precio.toLocaleString('es-ES');

    // ? Botón exclusivo del catálogo
    const addBtn = document.createElement("button");
    addBtn.className = "addBtn";

    // ? Botones y contenido exclusivos del carrito

    const sumBtn = document.createElement("button");
    sumBtn.className = "sumBtn";
    sumBtn.innerHTML = '<i class="fa fa-plus fa-2x" aria-hidden="true"></i>';

    const subsBtn = document.createElement("button");
    subsBtn.className = "subsBtn";
    subsBtn.innerHTML = '<i class="fa fa-minus fa-2x" aria-hidden="true"></i>';

    const qtyVal = document.createElement("p");
    qtyVal.textContent = qty;
    const modContainer = document.createElement("section");
    modContainer.className = "modContainer";


    function renderIcon() {
        addBtn.innerHTML = isCheck
            ? '<i class="fa fa-check fa-2x" aria-hidden="true"></i>'
            : '<i class="fa fa-plus fa-2x" aria-hidden="true"></i>';
    }

    renderIcon();

    addBtn.addEventListener('click', () => {
        isCheck = !isCheck;
        if (isCheck) {
            addItem(obj);
        } else {
            removeItem(obj);
        }
        renderIcon();
    });

    sumBtn.addEventListener('click', () => {
        addItem(obj);
        const cart = getCartItems();
        qtyVal.textContent = cart[obj.id].qty;
        showSubtotal();
        showTotal();
    });

    subsBtn.addEventListener('click', () => {
        removeItem(obj);
        const cart = getCartItems();
        if (cart[obj.id]) {
            qtyVal.textContent = cart[obj.id].qty;
        } else {
            card.remove();
        }
        showSubtotal();
        showTotal()
    });

    // ? Anidamiento de elementos
    content.appendChild(title);
    content.appendChild(desc);

    footer.appendChild(price);

    if (qty !== null) {
        modContainer.appendChild(subsBtn);
        modContainer.appendChild(qtyVal);
        modContainer.appendChild(sumBtn);
        footer.appendChild(modContainer);
    }
    else {
        footer.appendChild(addBtn);
    }

    content.appendChild(footer)

    card.appendChild(img);
    card.appendChild(content);

    // ? Agregarlo en el padre

    parent.appendChild(card);
}

// ! Renderizar todos los productos en el catálogo
const catalog = document.getElementById('catalogo');
if (catalog) {
    items.forEach(item => { card(item, catalog) });
}

// ! Renderizar los elementos escogidos en el carrito
const carrito = document.getElementById('carrito');
if (carrito) {
    const cartItems = Object.values(getCartItems());
    cartItems.forEach(ci => { card(ci.item, carrito, ci.qty) });
}

// ! Renderizar el subtotal de productos
const subtotal = document.getElementById('subtotal');
if (subtotal) {
    showSubtotal();
}

// ! Renderizar el total de productos
const total = document.getElementById('total');
if (total) {
    showTotal();
}

// ! Agregar acción al botón de búsqueda

// ? Función de búsqueda
function searchProduct(name) {
    const query = name.trim().toLowerCase();
    return items.filter(product => product.nombre.toLowerCase().includes(query));
}

function renderCatalog(lista) {
  const catalog = document.getElementById("catalogo");
  catalog.replaceChildren();
  lista.forEach(item => card(item, catalog));
}

document.getElementById("searchButton").addEventListener("click", () => {
  const q = document.getElementById("searchBar").value;
  const filtrados = searchProduct(q);
  renderCatalog(filtrados);
});