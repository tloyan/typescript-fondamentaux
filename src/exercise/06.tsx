"use client"
// Les tuples
// http://localhost:3000/alone/exercise/06.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  enum Protocole {
    FTP = "ftp",
    HTTP = "http",
    HTTPS = "https",
  }

  type Connexion = [string, Protocole, string, number, string, string]
  let google: Connexion = [
    "connexion a google",
    Protocole.HTTPS,
    "google.com",
    443,
    "",
    "",
  ]
  let github: Connexion = [
    "connection a github",
    Protocole.HTTPS,
    "github.com",
    443,
    "",
    "",
  ]

  // 🐶 Créer une variable 'google' qui contiendra les infos de connexion à google
  // https google.com 443
  // Affiche le resultat à l'ecran avec le code
  // 🤖 displayText(`Connexion ${google[0]} : ${google[1]}://${google[2]}:${google[3]} `)

  // 🐶 créer 3 autres connexions de ton choix et affiche le resultat à l'écran

  // 🐶 créer un tableau `connexions` qui contiendra toutes les connexions
  // Ajoute des connexion via l'initialisation et via la méthode `push`
  let connexions: Connexion[] = [google]
  connexions.push(github)

  const [, githubProtocole, githubHost, , user] = github

  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
