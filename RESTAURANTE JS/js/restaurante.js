function pedidos() { // Función para gestionar los pedidos
    var tipoPlato=document.getElementById("tipoPlato").value; // Obtener el tipo de plato seleccionado
    var cantidadPatos=parseInt(document.getElemgetentById("cantidadPatos").value); // Obtener la cantidad de platos
    var totalBebidas=document.getElementById("totalBebidas").value; // Obtener el total de bebidas (¡falta obtener la cantidad de bebida!)
    var cantidadBebida=parseInt(document.getElemgetentById("cantidadbebida").value); // Obtener la cantidad de bebidas (¡error de escritura en 'getElementById'!)

    var precioPlatos = { // Precios de los platos en un objeto
        "Sancocho": 20000,
        "Arroz con pollo": 15600,
        "Pasta napolitana": 30000,
    };

    var precioBebidas={ // Precios de las bebidas en un objeto
        "Gaseosas": 1500,
        "Limonadas": 3000,
        "jugosas": 3500,
    };
    
    var totalPlatos= precioPlatos[tipoPlato]*cantidadPatos; // Calcular el total de los platos seleccionados
    var totalBebidas= precioBebidas*cantidadBebida; // Calcular el total de las bebidas (¡falta obtener la cantidad de bebida!)
    var total=  totalPlatos + totalBebidas; // Calcular el total general de la orden

    var resultado = document.getElementById("resultado"); // Obtener el elemento donde se mostrará el resultado
    resultado.textContent = "total a pagar: $" + total; // Mostrar el total a pagar en el elemento resultado
}
