"use client"
// Les objets
// http://localhost:3000/alone/exercise/03.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice
  let person: {
    name: string
    age: number
    isActive: boolean
    roles: string[]
    params: { id: number }
    payload: any
    friend: {
      name: string
      age: number
      isActive: boolean
      roles: string[]
      params: { id: number }
      payload: any
    }
  }

  // 🐶 Déclare une variable `person` (sans initialiser de valeur)
  // definie les propriétés / types suivants
  //
  // - name de type string
  // - age de type number
  // - isActive de type boolean
  // - roles un tableau de string
  // - params un object non defini
  // - payload peut avoir n'importe quel type

  // 🐶 affecte des valeurs à person
  // laisse payload undefined
  person = {
    name: "John",
    age: 30,
    roles: ["ADMIN"],
    isActive: true,
    params: { id: 1 },
    payload: undefined,
    friend: {
      name: "Joe",
      age: 28,
      roles: ["user"],
      isActive: false,
      params: { id: 2 },
      payload: undefined,
    },
  }

  // 🤖 Affiche dans le navigateur grace à `displayText` le libellé suivant
  // 'John à 30 ans et a le role ADMIN'
  displayText(
    `${person.name} à ${person.age} et a le role ${person.roles.map((r) => r)}`
  )

  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
