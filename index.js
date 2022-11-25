/**
 *PRÁCTICA INTRODUCCIÓN A JAVASCRIPT KEEPCODING
 *Mª Ángeles Córdoba
 */

import { menu } from "./utils/menu.js";

const students = [
    {
        age: 32,
        examScores: [5, 6, 8],
        gender: "male",
        name: "edu",
    },
    {
        age: 29,
        examScores: [7, 8, 9],
        gender: "female",
        name: "angeles",
    },
];

menu(students);
