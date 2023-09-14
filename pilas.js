//Ejercicio-1
function obtenerElementosDePila(pila, cantidad) {
  if (pila <= 0) {
    return [];
  }
  return pila.slice(0, cantidad);
}

const pila = [
  "Manzana",
  "Cebolla",
  "Apio",
  "Naranja",
  "Papaya",
  "Sandía",
  "Melón",
];
const cantidadDeseada = 4;

const elementosObtenidos = obtenerElementosDePila(pila, cantidadDeseada);

console.log(elementosObtenidos);

//Ejercicio-2
function reemplazar(pila, valorAntiguo, valorNuevo) {
  if (pila.length === 0) {
    return [];
  }

  // Utiliza el método map para crear un nuevo array con los valores reemplazados
  const pilasNuevas = pila.map((elemento) =>
    elemento === valorAntiguo ? valorNuevo : elemento
  );

  return pilasNuevas;
}

const pilasNumeros = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
const valorAntiguo = 5;
const valorNuevo = 7;

const numeros = reemplazar(pilasNumeros, valorAntiguo, valorNuevo);
console.log(numeros);

//Ejercicio-3
const pueblos = ["Pueblo Origen", "Pueblo 1", "Pueblo 2", "Destino"];

console.log("Recorrido de Ida:");
console.log(pueblos.join(" → "));
console.log("Regreso:");
console.log(pueblos.slice().reverse().join(" → "));

//Ejercicio-4
class Almacen {
  constructor(capacidad) {
    this.capacidad = capacidad;
    this.pilaPrincipal = [];
    this.pilaTemporal = [];
  }

  apilarContenedor(contenedor) {
    if (this.pilaPrincipal.length < this.capacidad) {
      this.pilaPrincipal.push(contenedor);
    } else {
      console.log("El almacén está lleno, no se puede apilar más.");
    }
  }

  retirarContenedor(numeroIdentificacion) {
    while (this.pilaPrincipal.length > 0) {
      const contenedor = this.pilaPrincipal.pop();
      if (contenedor.numeroIdentificacion === numeroIdentificacion) {
        while (this.pilaTemporal.length > 0) {
          this.pilaPrincipal.push(this.pilaTemporal.pop());
        }
        return contenedor;
      } else {
        this.pilaTemporal.push(contenedor);
      }
    }

    console.log(
      "No se encontró el contenedor con el número de identificación especificado."
    );
    return null;
  }
}

const almacen = new Almacen(5);

almacen.apilarContenedor({ numeroIdentificacion: 1, contenido: "Blusas" });
almacen.apilarContenedor({ numeroIdentificacion: 2, contenido: "Pantalones" });
almacen.apilarContenedor({ numeroIdentificacion: 3, contenido: "Zapatos" });
almacen.apilarContenedor({ numeroIdentificacion: 4, contenido: "Accesorios" });

const contenedorRetirado = almacen.retirarContenedor(3);
if (contenedorRetirado) {
  console.log(`Contenedor retirado: ${JSON.stringify(contenedorRetirado)}`);
}

console.log("Pila principal actual:", almacen.pilaPrincipal);
