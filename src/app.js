/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".cl", ".org", ".net", ".com.ar"];

for (let i = 0; i < pronoun.length; i++) {
  for (let x = 0; x < adj.length; x++) {
    for (let y = 0; y < noun.length; y++) {
      for (let d = 0; d < domain.length; d++) {
        console.log(`${pronoun[i]}${adj[x]}${noun[y]}${domain[d]}`);
      }
    }
  }
}
