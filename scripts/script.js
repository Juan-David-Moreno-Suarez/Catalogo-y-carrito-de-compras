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
const ipad = new Item({
    id: 5,
    nombre:"Ipad Apple 11 pulgadas 128 GB | Chip A16",
    categoria: "Tablets",
    precio: 2039000,
    imagen: "img/ipad.png",
    descripcion: "El iPad Apple 11 pulgadas con Chip A16 es un dispositivo tablet de alta gama que ofrece un rendimiento excepcional, una pantalla de alta calidad y una experiencia de usuario intuitiva. Ideal para productividad, entretenimiento y creatividad."
});
const xiaomiTablet= new Item({
    id: 6,
    nombre:"Xiaomi Tablet Pad 7 8gb/256gb",
    categoria: "Tablets",
    precio: 1799900,
    imagen: "img/xiaomipad7.png",
    descripcion: "El Xiaomi Pad 7 es un tablet de alta gama con pantalla de 12 pulgadas, procesador Snapdragon 8 Gen 1, memoria RAM de 8GB y almacenamiento interno de 256GB. Ideal para entretenimiento, productividad y multitarea."
});
const jblTourSmart = new Item({
    id: 7,
    nombre: "JBL Tour Smart",
    categoria: "Audífonos",
    precio: 1774900,
    imagen: "img/jbltoursmart.png",
    descripcion: "Los JBL Tour Smart son audífonos inalámbricos de alta calidad que ofrecen un sonido excepcional, cancelación activa de ruido y una experiencia de escucha personalizada. Con un diseño elegante y cómodo, son ideales para música, llamadas y entretenimiento en movimiento."
});
const sonyWH1000XM5 = new Item({
    id: 8,
    nombre: "Sony WH-1000XM5",
    categoria: "Audífonos",
    precio: 2249900,
    imagen: "img/sony.png",
    descripcion: "Los Sony WH-1000XM5 son audífonos inalámbricos de alta gama que ofrecen una calidad de sonido excepcional, cancelación activa de ruido líder en la industria y una experiencia de escucha personalizada. Con un diseño elegante y cómodo, son ideales para música, llamadas y entretenimiento en movimiento."
});
const bose700 = new Item({
    id: 9,
    nombre: "Bose Bass Module 700",
    categoria: "Bocinas",
    precio: 4489900,
    imagen: "img/bose700.png",
    descripcion: "El Bose Bass Module 700 es un subwoofer inalámbrico de alta calidad diseñado para complementar los sistemas de sonido Bose. Ofrece graves profundos y potentes, mejorando la experiencia de audio en películas, música y juegos. Con un diseño elegante y compacto, es fácil de integrar en cualquier configuración de entretenimiento en el hogar."
});
const jblClip5 = new Item({
    id: 10,
    nombre: "Bocina Portátil JBL Clip 5 Bluetooth, Negro",
    categoria: "Bocinas",
    precio: 129900,
    imagen: "img/jblclip5.png",
    descripcion: "La bocina portátil JBL Clip 5 es una opción ideal para disfrutar de música en cualquier lugar. Con una potencia de sonido impresionante y una duración de batería prolongada, es perfecta para actividades al aire libre. Su diseño resistente y portátil la hace ideal para aventuras al aire libre."
});
const samsungGalaxyWatch8 = new Item({
    id: 11,
    nombre: "Reloj Samsung Galaxy Watch 8 44Mm Gris Oscuro",
    categoria: "Smartwatches",
    precio: 1299900,
    imagen: "img/samsungwatch8.png",
    descripcion: "El Samsung Galaxy Watch 8 es un reloj inteligente de alta gama que combina un diseño elegante con una amplia gama de funciones. Con una pantalla AMOLED vibrante, seguimiento de salud avanzado y compatibilidad con aplicaciones, es el compañero perfecto para aquellos que buscan un dispositivo inteligente para mejorar su estilo de vida."
});
const appleWatchUltra3 = new Item({
    id: 12,
    nombre: "Apple Watch Ultra 3 Correa Alpine",
    categoria: "Smartwatches",
    precio: 4499900,
    imagen: "img/applewatchultra.png",
    descripcion: "El Apple Watch Ultra 3 con Correa Alpine es un reloj inteligente de alta gama diseñado para ofrecer un rendimiento excepcional y una experiencia de usuario premium. Con características avanzadas de salud, seguimiento de actividad física y una pantalla vibrante, es el compañero perfecto para aquellos que buscan un dispositivo inteligente para mejorar su estilo de vida."
});
const items = [iphone14, galaxyS23Ultra, hpVictus, lenovoLegionpro, ipad, xiaomiTablet, jblTourSmart, sonyWH1000XM5, bose700, jblClip5, samsungGalaxyWatch8, appleWatchUltra3];
