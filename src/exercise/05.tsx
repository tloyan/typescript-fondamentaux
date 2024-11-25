"use client"
// Les types alias
// http://localhost:3000/alone/exercise/04.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  type civility = "Mr" | "Mme" | "Mlle"
  const civility: civility = "Mr"
  displayText(`Bonjour ${civility}`)

  // 🐶 Déclare une variable `uploadSize` et un type `maxUploadSize` avec comme valeur possible 2048 ou 4096
  // avec displayText affiche 'Upload size 2048' en utilisant uploadSize
  type maxUploadSize = 2048 | 4096
  const uploadSize: maxUploadSize = 2048
  displayText(`Upload size ${uploadSize}`)

  // 🐶 Déclare un Enum  `HttpStatusCode` et code toutes les valeurs demandées par 👨‍✈️ Hugo
  // 📝 documentation declaration Enum https://www.typescriptlang.org/docs/handbook/enums.html
  // Créér une variable `httpResponse` et initialise la avec la valeur '400' sans utliser de Magic String
  // avec displayText affiche 'Reponse du serveur 400' en utilisant httpResponse
  enum HttpStatusCode {
    CONTINUE = 100,
    OK = 200,
    MOVED_PERMANENTLY = 301,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
  }
  const httpResponse: HttpStatusCode = HttpStatusCode.BAD_REQUEST
  displayText(`Reponse du serveur ${httpResponse}`)

  // 🐶 Déclare un Enum  `TransfertMessage` et code toutes les valeurs demandées par 👨‍✈️ Hugo
  // Créér une variable `message` et initialise la avec la valeur 'Transfert avec succès' sans utliser de Magic String
  // avec displayText affiche 'Message : Transfert avec succès' en utilisant `message`
  enum TransfertMessage {
    SUCCESS = "Transfert avec succès",
    ERROR = "Erreur durant le transfert",
    RETRY = "Recommencez le transfert",
  }
  const message: TransfertMessage = TransfertMessage.SUCCESS
  displayText(`Message: ${message}`)

  enum Note {
    STAR1 = 1,
    STAR2,
    STAR3,
    STAR4,
    STAR5,
    NSP = "ne se prononce pas",
  }

  displayText(`${Note.STAR4}`)

  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
