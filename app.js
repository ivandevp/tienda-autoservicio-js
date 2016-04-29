// entrada del usuario
var cantidadSucursales = parseInt(prompt("Ingresa el # de sucursales"))

var totalTienda;
var totalSucursal;
var totalEmpresa = 0;
var separador = "=========================";

// proceso
for (var i = 1; i <= cantidadSucursales; i++) {
	var cantidadTiendas = parseInt(prompt("Ingresa el # de tiendas de la sucursal " + i))
	totalSucursal = 0;
	for (var j = 1; j <= cantidadTiendas; j++) {
		var cantidadEmpleados = parseInt(prompt("Ingresa el # de empleados de la tienda " + j + " de la sucursal " + i))
		totalTienda = 0;
		for (var k = 1; k <= cantidadEmpleados; k++) {
			var ventaEmpleado = parseInt(prompt("Ingresa la venta del empleado " + k + " de la tienda " + j + " de la sucursal " + i))
			document.write("Sucursal: " + i + "<br>Tienda: " + j + "<br>Empleado: " + k + "<br>Venta: " +ventaEmpleado + "<br>" + separador + "<br>");
			totalTienda += ventaEmpleado;
		}
		document.write("Sucursal: " + i + "<br>Tienda: " + j + "<br>Venta: " + totalTienda + "<br>" + separador + "<br>")
		totalSucursal += totalTienda;
	}
	document.write("Sucursal: " + i + "<br>Venta: " + totalSucursal + "<br>" + separador + "<br>")
	totalEmpresa += totalSucursal;
}

// salida
document.write("Venta Total: " + totalEmpresa)

















