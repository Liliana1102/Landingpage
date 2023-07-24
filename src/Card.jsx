import React from "react"
import './index.css';
import controlX from './assets/img/control_xbox.png';
import alexa from './assets/img/alexa.png';
import tv_samsung from './assets/img/tv_samsung.png';
import tecladorosa from './assets/img/tecladorosa.png';


const Card =_=>{
    return(
        <div>
            <div class="container">
                <div class="card">
                    <figure>
                        <img src={controlX}/>
                    </figure>
                    <div class="contenido">
                        <h3>Control Xbox</h3>
                        <p>$12,000</p>
                        <button href="#">Leer más</button>
                    </div>
                </div>
                <div class="card">
                    <figure>
                        <img src={alexa}/>
                    </figure>
                    <div class="contenido">
                        <h3>Alexa</h3>
                        <p>$12,000</p>
                        <button href="#">Leer más</button>
                    </div>
                </div>
                <div class="card">
                    <figure>
                        <img src={tv_samsung}/>
                    </figure>
                    <div class="contenido">
                        <h3>Smart TV</h3>
                        <p>$12,000</p>
                        <button href="#">Leer más</button>
                    </div>
                </div>
                <div class="card">
                    <figure>
                        <img src={tecladorosa}/>
                    </figure>
                    <div class="contenido">
                        <h3>Teclado y mouse</h3>
                        <p>$12,000</p>
                        <button href="#">Leer más</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Card;