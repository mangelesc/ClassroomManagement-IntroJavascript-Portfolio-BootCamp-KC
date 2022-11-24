/**
 *PRÁCTICA INTRODUCCIÓN A JAVASCRIPT KEEPCODING
 *Mª Ángeles Córdoba
 */

import { menu } from "./utils/menu.js";

const students = [
    {
        age: 32,
        examScores: [],
        gender: "male",
        name: "edu",
    },
    {
        age: 29,
        examScores: [],
        gender: "female",
        name: "angeles",
    },
];

menu(students);
