import React from "react"
import arakiri from './assets/img/OFERTAS2.png';
import './index.css';


const App =_=>{
  return(

    <div>

      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" >
          <div id="carru" class="carousel-inner rounded-3">
            <div class="carousel-item active">
              <img src="./public/carrucel 4.jpg" class="d-block w-100" alt="bootstrap" width="520px" height="400px"/>
            </div>
            <div class="carousel-item">
              <img src="./public/carrucel 3.jpg" class="d-block w-100" alt="..." width="520px" height="400px"/>
            </div>
            <div class="carousel-item">
              <img src="./public/carrucel 5.jpg" class="d-block w-100" alt="..." width="520px" height="400px"/>
            </div>
            <div class="carousel-item">
              <img src="./public/carrucel.webp" class="d-block w-100" alt="..." width="520px" height="400px"/>
            </div>
        </div>
      </div>

    </div>
  )
}

export default App




















// function App() {
//   return(
//     <div className="App">
//       <h1>Hola wueyyy</h1>

//     </div>
//   )
// }

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


