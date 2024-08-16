class Hamburguesa {
    constructor(nombre = '', precio = 0, ingredientes = [], numeroCombo = 1){ //Asignar valores a las variables
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
        this.numeroCombo = numeroCombo;
    }
}

// Creamos el objeto haburguesa
// hamburguesa1 es un objeto Hamburguesa utilizando el constructor de la clase

const hamburguesa1 = new Hamburguesa('Big Mac', 5000, ['carne', 'cheddar'], 1);

//Creo un array de 7 hamburguesas con el constructor propio de la clase
const hamburguesas = [
    new Hamburguesa('Big Mac', 5000, ['carne', 'cheddar'], 1),
    new Hamburguesa('Big Static Mac', 6000, ['carne', 'cheddar'], 1),
    new Hamburguesa('Super Mac', 7000, ['carne', 'cheddar'], 1),
    new Hamburguesa('Super Mac', 7000, ['carne', 'cheddar'], 1),
    new Hamburguesa('Big Mac', 5000, ['carne', 'cheddar'], 1),
    new Hamburguesa('Big Mac', 5000, ['carne', 'cheddar'], 1),
    new Hamburguesa('Cuarto de Libra con Queso', 5500, ['carne', 'cheddar'], 1),
]



// Agregar al carrito una hamburguesa
hamburguesas.push(hamburguesa1); //se crea previamente el objeto hamburguesa1 y luego se agrega
//Se agrega al mismo tiempo que se crea
hamburguesas.push(new Hamburguesa('Cuarto de Libra con Queso', 5500, ['carne', 'cheddar'], 1));

// Mostrar el array para verificar
console.log(hamburguesas);
console.log(hamburguesas.length);


//FILTRAR HAMBURGUESAS CON PRECIO MAYOR A 5500

const precioMayor5500 = hamburguesas.filter(hamburguesas => hamburguesas.precio > 550);

if (precioMayor5500.length != 0) {
    console.log('Estas son las hamburguesas con el precio indicado')
    console.table(precioMayor5500); //Muestra el array como una tabla
} else {
    console.log('No hay hamburguesas con ese precio')
}


//FILTRAR HAMBURGUESAS CON UN PRECIO MAYOR A UN PRECIO DADO

function mayorQueX(valor, arreglo) {
    if (arreglo.length !== 0) {
        // Filtra los elementos cuyo precio es mayor que el valor dado
        const precioMayor = arreglo.filter(item => item.precio > valor);
        if (precioMayor.length > 0) {
            console.log('Estos son los items con un precio mayor al valor indicado:');
            console.table(precioMayor);
        } else {
            console.log('No hay items con un precio mayor al valor indicado.');
        }
    } else {
        console.log('El arreglo está vacío.'); //Indica que no hay items en el arreglo
    }
}

mayorQueX(7000, hamburguesas);

//FILTRAR EL HAMBURGUESAS 

// FILTRAR LAS HAMBURGUESAS

function filtroH(palabra, arreglo) {
    if (arreglo.length !== 0) {
        // Filtra los elementos cuyo nombre contiene la palabra dada
        const resultado = arreglo.filter(item => item.nombre.includes(palabra));
        if (resultado.length > 0) {
            console.log('Estos son los items con la palabra indicada:');
            console.table(resultado);
        } else {
            console.log('No hay items con la palabra indicada.');
        }
    } else {
        console.log('El arreglo está vacío.'); // Indica que no hay items en el arreglo
    }
}

filtroH('Libra', hamburguesas);


