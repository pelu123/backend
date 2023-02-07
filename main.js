
class administradorDeProductos{
    listado
    constructor(){
        this.listado = []
    }

    agregarInstrumento({id, instrumento, marca}) {
        this.listado.push(new Instrumentos ({id, instrumento, marca}))
    }

    listaDeProductos() {
        return this.listado
    }

    productoDisponible() {

    }
}

class Instrumentos {
    id
    instrumento
    marca

    constructor ({id,instrumento, marca}){
        this.id = id
        this.instrumento = instrumento
        this.marca = marca
    }
}

const administradorDeProductos = new administradorDeProductos()

administradorDeProductos.agregarInstrumento({id : '1' , instrumento : 'guitarra', marca : 'Fender'})
console.log(administradorDeProductos.listaDeProductos())
//managerDeProductos.productoDisponible(1)