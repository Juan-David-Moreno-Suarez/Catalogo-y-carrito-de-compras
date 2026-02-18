class Item {
    constructor({id, nombre, categoria, precio, imagen, descripcion }) {
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
    descripcion: "El iPhone 14 Pro Max de Apple, un dispositivo móvil de alta gama, combina una potencia asombrosa, durabilidad y una multitud de características en un tamaño aún más grande. Es el compañero perfecto para aquellos que buscan la funcionalidad de un iPhone en un formato de lujo y de gran tamaño. Diseño y Pantalla: Al igual que el iPhone 13, el iPhone 14 Pro Max tiene una pantalla con esquinas redondeadas y un diseño curvo. Sin embargo, la medida diagonal de su pantalla es de 6.7 pulgadas en un rectángulo estándar, aunque el área real de visualización es menor. Accesibilidad: El iPhone 14 Pro Max también ofrece funcionalidades de accesibilidad para personas con dificultades visuales, motrices, auditivas y cognitivas, facilitando el uso del dispositivo a una amplia gama de usuarios. Compatibilidad de Archivos y Idiomas: Soporta una variedad de formatos de archivo como .jpg, .pdf, .docx, entre otros, y ofrece soporte para múltiples idiomas y métodos de entrada de texto, lo que refleja su capacidad para ser utilizado globalmente. Sostenibilidad y Medio Ambiente: Apple sigue destacando su compromiso con la sostenibilidad, con el objetivo de crear productos sin extraer recursos de la tierra y alcanzar la neutralidad en emisiones de carbono para el 2030. Estos aspectos resaltan la innovación y el enfoque en la accesibilidad y sostenibilidad ambiental del iPhone 14 Pro Max."
});
const galaxyS23Ultra = new Item({
    id: 2,
    nombre: "Samsung Galaxy S23 Ultra",
    categoria: "Smartphones",
    precio: 4399900,
    imagen: "img/samsungs23ultra.png",
    descripcion: "El Samsung Galaxy S23 Ultra es un dispositivo móvil de alta gama que combina potencia, durabilidad y una multitud de características en un tamaño aún más grande. Es el compañero perfecto para aquellos que buscan la funcionalidad de un smartphone en un formato de lujo y de gran tamaño. Diseño y Pantalla: El Galaxy S23 Ultra presenta una pantalla con esquinas redondeadas y un diseño curvo, con una medida diagonal de 6.8 pulgadas en un rectángulo estándar, aunque el área real de visualización es menor. Accesibilidad: El Galaxy S23 Ultra también ofrece funcionalidades de accesibilidad para personas con dificultades visuales, motrices, auditivas y cognitivas, facilitando el uso del dispositivo a una amplia gama de usuarios. Compatibilidad de Archivos y Idiomas: Soporta una variedad de formatos de archivo como .jpg, .pdf, .docx, entre otros, y ofrece soporte para múltiples idiomas y métodos de entrada de texto, lo que refleja su capacidad para ser utilizado globalmente. Sostenibilidad y Medio Ambiente: Samsung sigue destacando su compromiso con la sostenibilidad, con el objetivo de crear productos sin extraer recursos de la tierra y alcanzar la neutralidad en emisiones de carbono para el 2030. Estos aspectos resaltan la innovación y el enfoque en la accesibilidad y sostenibilidad ambiental del Galaxy S23 Ultra."
});
const hpVictus = new Item({
    id: 3,
    nombre: "Hp Victus 15.6 I5 Rtx3050 8gb 512gb Ssd",
    categoria: "Computadores",
    precio: 2665845,
    imagen: "img/hpvictus.png",
    descripcion: "El Hp Victus es un computador de escritorio con procesador Intel i5, tarjeta gráfica RTX 3050, 8GB de RAM y SSD de 512GB. Ideal para gaming y productividad general. Diseño moderno y eficiente que combina potencia y rendimiento en un solo dispositivo."
});
const lenovoLegionpro = new Item({
    id: 4,
    nombre: "Notebook Lenovo Legion Pro 16 negro 32GB de Ram - 1TB SSD - Intel ULTRA 9 Color Negro",
    categoria: "Computadores",
    precio: 12000000,
    imagen: "img/lenovolegionpro.png",
    descripcion: "Procesador: Intel Core Ultra 9 275HX. Versión del sistema operativo: 11. Nombre del sistema operativo: Windows. Capacidad de disco SSD: 1 TB. Capacidad total del módulo de memoria RAM: 32 GB. Con pantalla táctil: No. Resolución de la pantalla: 2560 px x 1600 px."
});