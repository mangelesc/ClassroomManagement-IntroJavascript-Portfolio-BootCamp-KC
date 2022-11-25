function randomValueArray(arrayList) {
    const maxValue = arrayList.length;

    return Math.floor(Math.random() * maxValue);
}

//3- Mostrar por consola todos los nombres de los alumnos.
export function allNamesStudents(students) {
    students.forEach((student) => {
        console.log(student.name);
    });
}

//4- Eliminar el último alumno de la clase.
export function deleteLastStudent(students) {
    console.table(students);

    if (students.length > 0) {
        students.pop();
        console.log("Último alumno eliminado/a");
    }

    console.table(students);
}

//5- Eliminar un alumno aleatoriamente de la clase.
export function deleteRandomStudent(students) {
    console.table(students);

    if (students.length > 0) {
        const randomValue = randomValueArray(students);
        let randomStudent = students[randomValue];
        console.log(randomStudent.name + " ha sido eliminado/a");
        students.splice(randomValue, 1);
    }

    console.table(students);
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

    tweentiesStudents.forEach((student) => {
        console.log(student.name);
    });
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

    let average = Math.round(count / students.length);

    return average;
}

//14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos
//que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su
//listado de notas.
export function scoresRandom(students) {
    students.forEach((student) => {
        let randomScore = Math.floor(Math.random() * 10);

        student.examScores.push(randomScore);
    });

    console.table(students);
}

//15- Ordenar el array de alumnos alfabéticamente según su nombre.
export function alphOrder(students) {
    students.sort((a, b) => {
        if (a.name.toLowerCase() == b.name.toLowerCase()) {
            return 0;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        return 1;
    });

    return students;
}

//16- Mostrar por consola el alumno de la clase con las mejores notas.
function bestScoreStudent(students) {
    let bestScoreStudent = "";
    let highestScore = 0;

    students.forEach((student) => {
        //comprobamos que haya notas en el array
        if (student.examScores > 0) {
            //Si las hay comparamos
            student.examScores.forEach((mark) => {
                //hacemos la media de las notas cada alumno
                let sumAll = 0;
                sumAll += mark;

                //camparamos si es mayor al anterior
                if (sumAll > highestScore) {
                    //si lo es, asignamos el valor a las variables de control
                    highestScore = sumAll;
                    bestScoreStudent = student;
                }
            });
        }
    });
    //Si ningun alumno tiene notas, devolvemos un string vacío
    return bestScoreStudent;
}

export function printBestScoreStudent(students) {
    let bestStudent = bestScoreStudent(students);

    //Comprobamos que no nos haya devuelto un string vacio (no habría notas registardas)
    if (bestStudent != 0) {
        console.table(bestStudent);

        // Si no, mostramos un mensaje de aviso.
    } else {
        console.log("Ups, los alumnos aún no tienen notas registradas");
    }
}

//17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.
export function bestScore(students) {
    let bestStudent = bestScoreStudent(students);

    //Comprobamos que no nos haya devuelto un string vacio (no habría notas registardas)
    if (bestStudent != 0) {
        let sumAll = 0;

        bestStudent.examScores.forEach((mark) => {
            sumAll += mark;
        });

        let averageScore = sumAll / bestStudent.examScores.length;
        //limitamos a 2 el número de decimales
        averageScore = averageScore.toFixed(2);

        console.log(bestStudent.name + " tiene la nota media más alta: " + averageScore + "!!");
    }
    // Si no, mostramos un mensaje de aviso.
    else {
        console.log("Ups, los alumnos aún no tienen notas registradas");
    }
}

//18- Añadir un punto extra a cada nota existente de todos los alumnos.
//Recordad que la nota máxima posible es 10
export function increaseScores(students, add) {
    const MAXSCORE = 10.0;

    students.forEach((student) => {
        for (let i = 0; i < student.examScores.length; i++) {
            if (student.examScores[i] + add <= MAXSCORE) {
                student.examScores[i] += add;
            }
        }
    });

    console.table(students);
}

//19- Si los alumnos aún no tienen registrada ninguna nota, les pondremos un 10.
export function setScore(students, set) {
    students.forEach((student) => {
        if (student.examScores.length === 0) {
            student.examScores[0] = set;
        }
    });

    console.table(students);
}
