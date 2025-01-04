import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//import './topic/01-basic-types.ts'
//import './topic/02-object-interface.ts'
//import './topic/03-functions.ts'
//import './topic/04-homework-types.ts'
//import './topic/05-basic-destructuring.ts'
//import './topic/06-function-destructuring.ts'
//import './topic/07-import-export.ts'
//import './topic/08-classes.ts'
//import './topic/09-generics.ts'
import './topic/10-decorators.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `Hola mundo
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

console.log("Hola mundo");

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
