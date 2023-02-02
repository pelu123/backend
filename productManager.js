const fs = require('fs')

async function main() {
    const productos = []

productos.push =  ({producto:'guitarra'})

const lista = JSON.stringify(productos)

fs.promises.writeFile('productos.json', lista)

const productosComprados = JSON.parse (await fs.promises.readFile('productos.json', 'utf-8'))

console.log(productosComprados)

}

main()