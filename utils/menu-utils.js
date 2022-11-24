import readline from "readline";

//
function randomValueArray(arrayList) {
    const maxValue = arrayList.length;
    return Math.floor(Math.random() * maxValue);
}

//3- Mostrar por consola todos los nombres de los alumnos.
export function allNamesStudents(students) {
    students.forEach((student) => {
        console.log("  - " + student.name);
    });
}

//4- Eliminar el último alumno de la clase.
export function deleteLastStudent(students) {
    console.table(students);
    if (students.length > 0) {
        students.pop();
        console.log("Último alumno eliminado/a");
        console.table(students);
    }
}

//5- Eliminar un alumno aleatoriamente de la clase.
export function deleteRandomStudent(students) {
    console.table(students);
    if (students.length > 0) {
        const randomValue = randomValueArray(students);
        let randomStudent = students[randomValue];
        console.log(randomStudent.name + " ha sido eliminado/a");
        students.splice(randomValue, 1);
        console.table(students);
    }
}

//6- Mostrar por consola todos los datos de los alumnos que son chicas.
export function girlStudents(students) {
    let girlStudents = [];
    students.forEach((student) => {
        if (student.gender == "female") {
            girlStudents.push(student);
        }
    });
    return girlStudents;
}

//7- Mostrar por consola el número de chicos y chicas que hay en la clase.
function boyStudents(students) {
    let boyStudents = [];
    students.forEach((student) => {
        if (student.gender == "male") {
            boyStudents.push(student);
        }
    });
    return boyStudents;
}

export function countStudents(students) {
    let boys = boyStudents(students);
    let girls = girlStudents(students);
    console.log("  -Total chicos: " + boys.length);
    console.log("  -Total chicas: " + girls.length);
}

//8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
export function allGirlSudents(students) {
    let girls = girlStudents(students);
    return students.length == girls.length;
}

//9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
export function students20s(students) {
    let tweentiesStudents = [];
    students.forEach((student) => {
        if (student.age >= 20 && student.age <= 25) {
            tweentiesStudents.push(student);
        }
    });
    return tweentiesStudents;
}

//10- Añadir un alumno nuevo con los siguientes datos:
export function newRandomStudent(students) {
    const availableMaleNames = ["pepe", "juan", "victor", "Leo", "francisco", "carlos"];
    const availableFemaleNames = ["cecilia", "ana", "luisa", "silvia", "isabel", "virginia"];
    const availableGenders = ["male", "female"];

    //Género aleatorio
    let indexGender = randomValueArray(availableGenders);
    let randomgender = availableGenders[indexGender];

    let randomname = "";
    //Dependiendo del género, nombre aletorio
    if (availableGenders[indexGender] === "male") {
        let indexName = randomValueArray(availableMaleNames);
        randomname = availableMaleNames[indexName];
    } else {
        let indexName = randomValueArray(availableFemaleNames);
        randomname = availableFemaleNames[indexName];
    }

    //Edad aletarotia
    let randomAge = Math.floor(Math.random() * (50 - 20)) + 20;

    //Añadimos
    students.push({
        age: randomAge,
        examScores: [],
        gender: randomgender,
        name: randomname,
    });

    console.table(students);
}

//11- Mostrar por consola el nombre de la persona más joven de la clase.
export function youngestStudent(students) {
    let youngest = students[0];
    students.forEach((student) => {
        if (student.age < youngest.age) {
            youngest = student;
        }
    });
    return youngest;
}

//12- Mostrar por consola la edad media de todos los alumnos de la clase.
export function avegareAge(students) {
    let count = 0;
    students.forEach((student) => {
        count += student.age;
    });
    let average = Math.round(count / students.length, 0);
    return average;
}

//14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos
//que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su
//listado de notas.

//15- Ordenar el array de alumnos alfabéticamente según su nombre.
export function alphOrder(students) {
    students.sort((a, b) => {
        if (a.name == b.name) {
            return 0;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 1;
    });

    return students;
}
