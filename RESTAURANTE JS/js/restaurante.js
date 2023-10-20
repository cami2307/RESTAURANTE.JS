function pedidos() {
    var tipoPlato=document.getElementById("tipoPlato").value;
    var cantidadPatos=parseInt(document.getElemgetentById("cantidadPatos").value);
    var totalBebidas=document.getElementById("totalBebidas").value;
    var cantidadBebida=parseInt(document.getElemgetentById("cantidadbebida").value);

    var precioPlatos = {
        "Sancocho": 20000,
        "Arroz con pollo": 15600,
        "Pasta napolitana": 30000,
    };

    var precioBebidas={
        "Gaseosas": 1500,
        "Limonadas": 3000,
        "jugosas": 3500,
    };
    
    var totalPlatos= precioPlatos[tipoPlato]*cantidadPatos;
    var totalBebidas= precioBebidas*cantidadBebida;
    var total=  totalPlatos + totalBebidas;

    var resultado = document.getElementById("resultado");
    resultado.textContent = "total a pagar: $" + total;
    
}
