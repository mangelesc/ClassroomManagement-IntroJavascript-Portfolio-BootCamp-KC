import readline from "readline";

// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isInt(str) {
    // returns a boolean
    return /^[0-9]+$/.test(str);
}

//FUnción para comprobar si es dato pasado por parametro es de tipo int
export function checkValue(num, minValue, maxValue) {
    return num >= minValue && num <= maxValue;
}

// función para pedir un número al ususario por consola y validarlo
export function getNumberFromConsole(minValue, maxValue) {
    const promise = new Promise((resolve, reject) => {
        rl.question("Introduce el número de la opción que quieres elegir: ", (num) => {
            rl.pause();
            //Comprobamos si el valor es de tipo int, y está en rango
            if (isInt(num)) {
                if (checkValue(num, minValue, maxValue)) {
                    num = Number.parseInt(num);
                } else {
                    num = 0;
                }
                resolve(num);
            } else {
                reject(0);
            }
        });
    });
    return promise;
}
