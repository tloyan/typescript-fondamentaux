"use client"
// Les tableaux
// http://localhost:3000/alone/exercise/02.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  // 🐶 Créer une variable `names` mais sans initiliser de valeurs
  //  ajoute ensuite 'John' et 'doe' à `name` sans utiliser la méthode `push()`
  let names: string[]
  names = ["John", "doe"]

  displayText(`Il y a ${names.length} nom`)

  // 🤖 affiche 'Il y a 2 noms' dans le navigateur grace à `displayText` et `.length`

  // 🐶 Créer une constante `games` et initialise avec un tableau vide
  // avec la méthode `push()` ajoute 3 jeux
  // ⛏️ const games
  // 🤖 affiche le nombre d'élément à l'ecran
  let games = []
  games.push("call of duty", "world of warcraft", "game of life")
  displayText(`Il y a ${games.length} jeux`)

  // 🐶 Créer une constante `things` : un tableau qui peut prendre n'importe quel type de donnée
  // ⛏️ const things
  const things = []
  things.push("string", 1, 2, {})
  displayText(`Il y a ${things.length} chose`)
  // 🤖 affiche le nombre d'élément à l'ecran

  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
