import React from "react"
import './index.css';


const App =_=>{
  return(

    <div>

      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div  id="carru" class="carousel-inner rounded-3">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="./public/imgcarru.png" class="d-block w-100" alt="..." width="520px" height="400px"/>
              {/* <div class="carousel-caption top-0 mt-5">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div> */}
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="./public/carrucel 5.jpg" class="d-block w-100" alt="..." width="520px" height="400px"/>
              {/* <div id="text" class="carousel-caption top-0 mt-4">
                <h5 id="text">Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div> */}
            </div>
            <div class="carousel-item">
              <img src="./public/carrucel 3.jpg" class="d-block w-100" alt="..." width="520px" height="400px"/>
              {/* <div class="carousel-caption top-0 mt-4">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div> */}
            </div>
          </div>
          <button id="botun" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span id="boto1" class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button id="botun" class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span id="boto1" class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>

    </div>
  )
}

export default App
