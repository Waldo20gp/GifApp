



var listasAProbar = {
    lista1: {
        lista: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91],
        target: 23
    },
    lista2: {
        lista: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        target: 90
    },
    lista3: {
        lista: [-10, -5, 0, 5, 10, 15, 20, 25, 30, 35],
        target: 0
    }
};

function binarySearch(lista: number[], target: number): number {
    let inicio: number = 0,
        fin: number = lista.length - 1;

    while (inicio <= fin) {
        let medio: number = Math.floor((inicio + fin) / 2);

       

        lista[medio] === target ? lista[medio] : lista[medio] < target ? inicio = medio + 1 : fin = medio -1;


    }

    return -1; 
}

true ? console.log("hola") : console.log("error")

if(true){
    console.log("hola")
}else{
    console.log("error");
}

console.log(binarySearch(listasAProbar.lista1.lista, listasAProbar.lista1.target));
