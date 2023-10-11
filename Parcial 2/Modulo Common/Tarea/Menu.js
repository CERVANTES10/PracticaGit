function MostrarPrecio(Comida){
    const Menu={
        Hamburguesa: '100',
        Tacos: '120',
        Soda: '25',
        Pizza: '150',
        Sushi: '200'
    }
    const Default = 'No se ingreso una comida'
    let Precio = Menu[Comida] || Default
    console.log("Precio: $", Precio)
}

module.exports.MostrarPrecio = MostrarPrecio;

console.log(module);