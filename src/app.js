/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["Mi perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let action = ["se comió", "se meó en", "aplastó", "rompió"];
  let what = ["mis deberes", "mi móvil", "mi coche", "mi almuerzo"];
  let when = [
    "antes de la clase",
    "mientras dormía",
    "mientras hacía ejercicio",
    "en mi descanso",
    "mientras rezaba"
  ];

  const excuseGenerator = () => {
    //Variables para encontrar el índice de cada array
    let numeroAleatorioDecimal = Math.random();
    let indexWho = Math.floor(numeroAleatorioDecimal * who.length);
    let indexAction = Math.floor(numeroAleatorioDecimal * action.length);
    let indexWhat = Math.floor(numeroAleatorioDecimal * what.length);
    let indexWhen = Math.floor(numeroAleatorioDecimal * when.length);

    //Variables para obtener la palabra de cada array de forma aleatoria
    let wordWho = who[indexWho];
    let wordAction = action[indexAction];
    let wordWhat = what[indexWhat];
    let wordWhen = when[indexWhen];

    //Variable de la excusa completa
    let excuse = wordWho + " " + wordAction + " " + wordWhat + " " + wordWhen;

    return excuse;
  };

  console.log(excuseGenerator());

  //No tocar esta sección del código
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
