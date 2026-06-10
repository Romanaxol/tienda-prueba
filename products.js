/* =========================================================
   ARCHIVO FÁCIL DE EDITAR
   Cambia aquí nombre de tienda, WhatsApp, textos y productos.
   No necesitas tocar index.html ni script.js para agregar prendas.
   ========================================================= */

const STORE_CONFIG = {
  storeName: "Tienda de prueba",
  pageTitle: "Tienda de prueba | Catálogo de ropa",
  whatsappNumber: "59169726942",
  instagramUrl: "#",
  tiktokUrl: "#",
  heroTag: "Ropa urbana, deportiva y casual",
  heroTitle: "Ropa moderna para vender en Bolivia",
  heroText: "Catálogo de prendas con tallas, colores, precios y pedidos por WhatsApp. Diseñado para promocionar ropa en TikTok, Instagram y Facebook.",
  heroCardTitle: "Nuevos ingresos",
  heroCardText: "Poleras oversize, conjuntos deportivos, shorts y pantalones con ficha completa por producto.",
  helpTitle: "¿Listo para comprar?",
  helpText: "Escríbenos por WhatsApp para consultar tallas, colores, disponibilidad y método de entrega.",
  footerDescription: "Ropa urbana, deportiva y casual en Bolivia.",
  categories: [
    { name: "Poleras", filter: "Poleras", icon: "P", description: "Oversize, básicas, estampadas y urbanas." },
    { name: "Conjuntos", filter: "Conjuntos", icon: "C", description: "Conjuntos deportivos y casuales." },
    { name: "Shorts", filter: "Shorts", icon: "S", description: "Shorts urbanos y deportivos." },
    { name: "Pantalones", filter: "Pantalones", icon: "J", description: "Jeans, cargos y pantalones casuales." }
  ],
  benefits: [
    { title: "Catálogo claro", text: "Fotos, precio, tallas, colores, medidas y características de cada prenda." },
    { title: "Compra por WhatsApp", text: "El cliente consulta stock, talla y color antes de comprar." },
    { title: "Pagos simples", text: "Puedes cobrar por QR, transferencia o efectivo contra entrega." },
    { title: "Diseño responsive", text: "La página se adapta a celular, tablet y computadora." }
  ]
};

/* PRODUCTOS: copia un bloque completo para agregar más prendas. */
const PRODUCTS = [
  {
    id: "polera-oversize-negra",
    name: "Polera Oversize Negra",
    category: "Poleras",
    badge: "Nuevo",
    price: 85,
    currency: "Bs",
    shortDescription: "Polera oversize de corte amplio, color negro, cómoda para uso diario.",
    description: "Polera oversize negra con caída amplia, ideal para estilo urbano. Se puede combinar con short, jean cargo o pantalón deportivo.",
    image: "",
    gallery: [],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro"],
    stock: "Disponible",
    features: ["Corte oversize", "Tela suave al tacto", "Uso casual y urbano", "Fácil de combinar"],
    specs: { "Tipo de prenda": "Polera", "Material": "Algodón / poliéster", "Género": "Unisex", "Temporada": "Todo el año", "Entrega": "La Paz, El Alto y envíos coordinados" },
    measurements: [
      { size: "S", width: "50 cm", length: "68 cm" },
      { size: "M", width: "53 cm", length: "71 cm" },
      { size: "L", width: "56 cm", length: "74 cm" },
      { size: "XL", width: "59 cm", length: "77 cm" }
    ]
  },
  {
    id: "conjunto-deportivo",
    name: "Conjunto Deportivo",
    category: "Conjuntos",
    badge: "Oferta",
    price: 180,
    currency: "Bs",
    shortDescription: "Conjunto cómodo para uso diario, disponible en negro, gris y azul.",
    description: "Conjunto deportivo de dos piezas, pensado para uso diario, salidas casuales y contenido promocional. Incluye parte superior y parte inferior.",
    image: "",
    gallery: [],
    sizes: ["M", "L", "XL"],
    colors: ["Negro", "Gris", "Azul"],
    stock: "Pocas unidades",
    features: ["Conjunto de dos piezas", "Diseño deportivo casual", "Cómodo para uso diario", "Disponible en varios colores"],
    specs: { "Tipo de prenda": "Conjunto", "Material": "Poliéster / algodón", "Género": "Unisex", "Incluye": "Parte superior + parte inferior", "Entrega": "La Paz, El Alto y envíos coordinados" },
    measurements: [
      { size: "M", width: "52 cm", length: "69 cm" },
      { size: "L", width: "55 cm", length: "72 cm" },
      { size: "XL", width: "58 cm", length: "75 cm" }
    ]
  },
  {
    id: "short-urbano",
    name: "Short Urbano",
    category: "Shorts",
    badge: "Disponible",
    price: 75,
    currency: "Bs",
    shortDescription: "Short casual con bolsillos, cómodo y fácil de combinar.",
    description: "Short urbano casual con bolsillos laterales. Ideal para clima cálido, looks deportivos y promociones de ropa juvenil.",
    image: "",
    gallery: [],
    sizes: ["M", "L", "XL"],
    colors: ["Negro", "Beige", "Gris"],
    stock: "Disponible",
    features: ["Bolsillos laterales", "Corte casual", "Ligero y cómodo", "Ideal para uso diario"],
    specs: { "Tipo de prenda": "Short", "Material": "Algodón / poliéster", "Género": "Unisex", "Temporada": "Verano / uso diario", "Entrega": "La Paz, El Alto y envíos coordinados" },
    measurements: [
      { size: "M", width: "36-40 cm", length: "45 cm" },
      { size: "L", width: "40-44 cm", length: "47 cm" },
      { size: "XL", width: "44-48 cm", length: "49 cm" }
    ]
  },
  {
    id: "pantalon-cargo",
    name: "Pantalón Cargo",
    category: "Pantalones",
    badge: "Nuevo",
    price: 155,
    currency: "Bs",
    shortDescription: "Pantalón cargo con estilo urbano y bolsillos funcionales.",
    description: "Pantalón cargo inspirado en estética urbana. Recomendado para combinar con poleras oversize, zapatillas deportivas y accesorios casuales.",
    image: "",
    gallery: [],
    sizes: ["S", "M", "L"],
    colors: ["Negro", "Verde militar", "Beige"],
    stock: "Disponible",
    features: ["Bolsillos tipo cargo", "Estilo urbano", "Corte cómodo", "Buena opción para outfits casuales"],
    specs: { "Tipo de prenda": "Pantalón", "Material": "Gabardina / algodón", "Género": "Unisex", "Temporada": "Todo el año", "Entrega": "La Paz, El Alto y envíos coordinados" },
    measurements: [
      { size: "S", width: "34-38 cm", length: "98 cm" },
      { size: "M", width: "38-42 cm", length: "101 cm" },
      { size: "L", width: "42-46 cm", length: "104 cm" }
    ]
  }
];
