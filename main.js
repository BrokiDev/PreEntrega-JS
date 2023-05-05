// Calcular costo total de productos y/o servicios seleccionados por el usuario.


alert("Esta es una lista de servicios que puede pagar: 1= electricidad, 2= agua potable, 3= cable y telefono. Por favor digita con un numero la opcion deseada:")



let servicio = parseInt(prompt("Que servicio desea Pagar"));
const itbis = 0.18
let total_final = 0

switch (servicio) {
    case  1: 
        servicio = 4200
        alert(`El monto a pagar de la electricidad sin itbis es: ${servicio}`)
        total_final = servicio * itbis + servicio
        alert(`El costo total del servicio con itbis incluido es: ${total_final}`)
    break

    case 2:
        servicio = 2800
        alert(`El monto a pagar del agua potable sin itbis es: ${servicio}`)
        total_final = servicio * itbis + servicio
        alert(`El costo total del servicio con itbis incluido es: ${total_final}`)
    break

    case 3:
        servicio = 3600
        alert(`El monto a pagar del cable y telefono sin itbis es: ${servicio}`)
        total_final = servicio * itbis + servicio
        alert(`El costo total del servicio con itbis incluido es: ${total_final}`)
    break

    default:
        alert("Esta no es una opcion valida por favor introduce las opciones que salen en el menu")
}
