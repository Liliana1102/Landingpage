import React from "react"
import './index.css';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



const Buscador =_=>{
    return(
        <div>
            <div class="buscar">
                <input type="text" placeholder="buscar" required/>
                <div className="btn" style={{fontSize:"1.4em", color:'black'}}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
            </div>
        
        </div>
    )
}

export default Buscador;