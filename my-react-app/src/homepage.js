import React from "react";
import './homepage.css' ;

import aero from './aeronautical.png'
import ai from './ai.png'
import bio from './biomedical.png'
import chem from './chemical.png'
import civil from './civil.png'
import cse from './Cse.png'
import ece from './ece.png'
import eee from './eee.png'
import it from './it.png'
import mech from './mech.png'


const Homepage=()=>{
    return(
        <form>

            <div class="backsd">
                <h1>SELECT DEPARTMENT</h1>
            </div>

            <div class="position1">
                <div class="back">
                <a href="">
                    <img class="image1" src={aero} alt="Aero" />
                </a> 
                <p1>Aeronautical</p1>
            </div>
            </div>
            
            <div class="position2">
                <div class="back">
                <a href="">
                    <img class="image1" src={ai} alt="Ai" />
                </a> 
                <p2>AI</p2>
                </div>
            </div>

            <div class="position3">
                <div class="back">
                <a href="">
                    <img class="image1" src={bio} alt="Bio" />
                </a> 
                <p3>BioMedical</p3>
                </div>
            </div>

            <div class="position4">
                <div class="back">
                <a href="">
                    <img class="image1" src={chem} alt="Chem" />
                </a> 
                <p4>Chemical</p4>
                </div>
            </div>

            <div class="position5">
                <div class="back">
                <a href="">
                    <img class="image1" src={civil} alt="Civil" />
                </a> 
                <p5>Civil</p5>
                </div>
            </div>

            <div class="position6">
                <div class="back">
                <a href="">
                    <img class="image1" src={cse} alt="Cse" />
                </a> 
                <p6>CSE</p6>
                </div>
            </div>

            <div class="position7">
                <div class="back">
                <a href="">
                    <img class="image1" src={ece} alt="Ece" />
                </a>
                <p7>ECE</p7> 
                </div>
            </div>

            <div class="position8">
                <div class="back">
                <a href="">
                    <img class="image1" src={eee} alt="Eee" />
                </a> 
                <p8>EEE</p8>
                </div>
            </div>

            <div class="position9">
                <div class="back">
                <a href="">
                    <img class="image1" src={it} alt="It" />
                </a> 
                <p9>IT</p9>
                </div>
            </div>

            <div class="position10">
                <div class="back">
                <a href="">
                    <img class="image1" src={mech} alt="Mech" />
                    <p10>Mech</p10>
                </a> 
                </div>
            </div>

            <div>
            <input class='btn' type='submit' value='Upload your files'></input>
            </div>

            <div>
            <input class='btn2' type='submit' value='Logout'></input>
            </div>

        </form>
    );
}

export default Homepage;