const productos = [
    { nombre: "Gigabyte G5", precio: 250000, stock: 10, id: "1", img: "../img/Laptop1.png", idCat: "2" },
    { nombre: "Acer 4000", precio: 180000, stock: 10, id: "2", img: "../img/Laptop2.png", idCat: "2" },
    { nombre: "Auriculares Nisuta", precio: 20000, stock: 5, id: "3", img: "../img/Auriculares1.png", idCat: "3" },
    { nombre: "Mouse RedDragon", precio: 14000, stock: 10, id: "4", img: "../img/Mouse1.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}