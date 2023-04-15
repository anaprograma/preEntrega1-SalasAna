const remera = 10000;
const pantalon = 23000;
const bermuda = 16000;
const campera = 35000;
let sumartotal = 0;
let sumaRemera = 0;
let sumaPantalon = 0;
let sumaBermuda = 0;
let sumaCampera = 0;
let medioDePago = 0;
let cuotas = 0;
let total = 0;

function mostrarResultados() {
  alert(`usted ha comprado:
  ${sumaRemera} remeras
  ${sumaBermuda} bermudas
  ${sumaCampera} camperas
  ${sumaPantalon} pantalones
  el total de la compra es de ${sumartotal} pesos.`);
  medioDePago = prompt(`
  Seleccione medio de pago:
  1 para efectivo 
  2 para 3 cuotas sin interes
  3 para 6 cuotas con interes del 28%
  4 para 12 cuotas con interes del 66%`);
  switch (medioDePago) {
    case "1":
      if (sumartotal >= 50000) {
        sumartotal = (sumartotal * 0.9).toFixed(2);
        alert(`Tiene un 10% de descuento en su compra y debera pagar ${sumartotal} pesos.
      Que tenga un buen dia!`);
      } else {
        alert(`Debera pagar ${sumartotal} pesos.
      Que tenga un buen dia!`);
      }

      break;
    case "2":
      sumartotal = (sumartotal / 3).toFixed(2);
      alert(`Debera pagar 3 cuotas de ${sumartotal} pesos.
      Que tenga un buen dia!`);
      break;
    case "3":
      total = (sumartotal * 1.28).toFixed(2);
      cuotas = (total / 3).toFixed(2);
      alert(`Deberas pagar 6 cuotas de ${cuotas} pesos.
       El total seria de ${total} pesos.
      Que tenga un buen dia!`);
      break;
    case "4":
      total = (sumartotal * 1.66).toFixed(2);
      cuotas = (total / 3).toFixed(2);
      alert(`Deberas pagar 12 cuotas de ${cuotas} pesos.
       El total seria de ${total} pesos.
      Que tenga un buen dia!`);
      break;

    default:
      break;
  }
}

let compra = prompt(`seleccione lo que quiera comprar:
1 para remera 
2 para pantalon 
3 para bermuda 
4 para campera
y "fin" si desea terminar de comprar`);
if (compra == 1) {
  compra = 10000;
  sumaRemera += 1;
} else if (compra == 2) {
  compra = 23000;
  sumaPantalon += 1;
} else if (compra == 3) {
  compra = 16000;
  sumaBermuda += 1;
} else if (compra == 4) {
  compra = 35000;
  sumaCampera += 1;
}

while (compra != "FIN" && compra != "fin") {
  if (sumartotal == 0) {
    sumartotal += compra;
    alert(`el total es : ${sumartotal} presione enter para seguir comprando`);
  }

  compra = prompt(`seleccione lo que quiera comprar:
  1 para remera 
  2 para pantalon 
  3 para bermuda 
  4 para campera
  y "fin" si desea terminar de comprar`);
  if (compra == 1) {
    compra = 10000;
    sumaRemera += 1;
    alert("la remera sale 10000 pesos");
  } else if (compra == 2) {
    compra = 23000;
    sumaPantalon += 1;
    alert("el pantalon sale 23000 pesos");
  } else if (compra == 3) {
    compra = 16000;
    sumaBermuda += 1;
    alert("la bermuda sale 16000 pesos");
  } else if (compra == 4) {
    compra = 35000;
    sumaCampera += 1;
    alert("la campera sale 35000 pesos");
  }
  if (compra != "fin" && compra != "FIN") {
    sumartotal += compra;
    alert(`el total es : ${sumartotal} pesos`);
  }
}

mostrarResultados();
