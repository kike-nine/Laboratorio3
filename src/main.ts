
interface Grupo{
    Nombre: string;
    año: number;
    activo: boolean;
    genero: string;
};

var style = "background:green; font-weight: bold; font-size: 16px"

const genero1= "🎵 Pop Rock";
const genero2= "🎸 Rock";
const genero3= "🤘 Hard Rock";
const genero4= "🎼 Clasica";


const grupoA : Grupo= {
    Nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: genero1,
};

const grupoB : Grupo= {
    Nombre: "Queen",
    año: 1970,
    activo: false,
    genero: genero2,
};
const grupoC : Grupo= {
    Nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: genero3,
};
const grupoD : Grupo= {
    Nombre: "Ludwig Van Beethoven",
    año: 1770,
    activo: false,
    genero: genero4,
};
const grupoE : Grupo= {
    Nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: genero2,
};

console.log ("%cThe Beatles",style);
console.log(grupoA);
console.log ("%cQueen",style);
console.log(grupoB);
console.log ("%cAC DC",style);
console.log(grupoC);
console.log ("%cLudwig Van Beethoven",style);
console.log(grupoD);
console.log ("%cThe Rolling Stones",style);
console.log(grupoE);