import { getNumberFromConsole } from "./general-utils.js";
import {
    allNamesStudents,
    deleteLastStudent,
    deleteRandomStudent,
    girlStudents,
    countStudents,
    allGirlSudents,
    students20s,
    newRandomStudent,
} from "./menu-utils.js";

/**Función para desplegar el menú */
export async function menu(students) {
    let option;
    const lineBreak = "\n---------------------------------------------------\n";
    do {
        console.log(lineBreak + "CLASSROOM MANAGEMENT" + lineBreak);
        console.log("0- Salir/ Cerrar aplicación");
        console.log("1- Mostrar en formato de tabla todos los alumnos. ");
        console.log("2- Mostrar por consola la cantidad de alumnos que hay en clase.");
        console.log("3- Mostrar por consola todos los nombres de los alumnos.");
        console.log("4- Eliminar el último alumno de la clase.");
        console.log("5- Eliminar un alumno aleatoriamente de la clase.");
        console.log("6- Mostrar por consola todos los datos de los alumnos que son chicas.");
        console.log("7- Mostrar por consola el número de chicos y chicas que hay en la clase.");
        console.log("8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.");
        console.log("9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.");
        console.log(
            "10- Añadir un alumno nuevo con los siguientes datos: \n -Nombre aleatorio.\n -Edad aleatoria entre 20 y 50 años.\n -Género aleatorio.\n -Listado de calificaciones vacío."
        );
        console.log("11- Mostrar por consola el nombre de la persona más joven de la clase.");
        console.log("12- Mostrar por consola la edad media de todos los alumnos de la clase.");
        console.log("13- Mostrar por consola la edad media de las chicas de la clase.");
        console.log(
            "14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas."
        );
        console.log("15- Ordenar el array de alumnos alfabéticamente según su nombre.");
        console.log("16- Mostrar por consola el alumno de la clase con las mejores notas.");
        console.log("17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.");
        console.log("18- Añadir un punto extra a cada nota existente de todos los alumnos");
        console.log("19- Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.\n");

        try {
            option = await getNumberFromConsole(0, 19);
        } catch (error) {
            console.log("\n\nUps, valor incorrecto\n");
            option = 0;
        }

        switch (option) {
            case 1:
                console.log(lineBreak + "TABLA DE ESTUDIANTES");
                console.table(students);
                break;
            case 2:
                console.log(lineBreak + "TOTAL DE ALUMNOS EN CLASE");
                console.log(students.length);
                break;
            case 3:
                console.log(lineBreak + "NOMBRE DE ALUMNOS EN CLASE");
                allNamesStudents(students);
                break;
            case 4:
                console.log(lineBreak + "ELIMINAR ÚLTIMO ALUMNO");
                deleteLastStudent(students);
                break;
            case 5:
                console.log(lineBreak + "ELIMINAR ALUMNO ALEATORIO");
                deleteRandomStudent(students);
                break;
            case 6:
                console.log(lineBreak + "ALUMNAS EN CLASE");
                console.table(girlStudents(students));
                break;
            case 7:
                console.log(lineBreak + "CHICOS Y CHICAS EN CLASE");
                countStudents(students);
                break;
            case 8:
                console.log(lineBreak + "¿TODOS LOS ALUMNOS NOS CHICAS?");
                console.log(allGirlSudents(students));
                break;
            case 9:
                console.log(lineBreak + "ESTUDIANTES ENTRE 20 Y 25 AÑOS");
                console.table(students20s(students));
                break;
            case 10:
                console.log(lineBreak + "ESTUDIANTES ENTRE 20 Y 25 AÑOS");
                console.table(newRandomStudent(students));
                break;
            case 11:
                break;
            case 12:
                break;
            case 13:
                break;
            case 14:
                break;
            case 15:
                break;
            case 16:
                break;
            case 17:
                break;
            case 18:
                break;
            case 19:
                break;
            case 0:
                console.log("\nSee you later, Alligator \nAPP FINALIZADA\n\n");
                break;
            default:
                console.log("Ups, valor incorrecto");
                break;
        }
    } while (option != 0);
}
