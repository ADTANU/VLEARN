import { textAlign } from '@mui/system';
import React from 'react';
import './fourbutton.css';

import note from "./note.jpg"
import vvd from "./vvd.jpg"
import subb from "./subb.jpg"
import question from "./question.png"
function Four()
{
    return(
        <div>
            <div className='header'>
            </div>

            <div className='head1'>
                <h2>V</h2>
            </div>

            <div className='head2'>
                <h2>- LEARN</h2>
            </div>
            
            <div class="App1">
                <div class="card1"><img src={note} alt="note"/>
                    <div class="info1">
                        <div>
                            <input class='btn1' type='submit' value='SUBJECT NOTES'></input>
                        </div>
                    </div>
                </div>
            </div>




            <div className="App2">
                <div class="card2"><img src={vvd} alt="vvd"/>
                    <div class="info2">
                        <div>
                            <input class='btn2' type='submit' value='VIDEO LECTURES'></input>
                        </div>
                    </div>
                </div>
            </div>



            <div className="App3">
                <div class="card3"><img src={question} alt="question"/>
                    <div class="info3">
                        <div>
                            <input class='btn3' type='submit' value='QUESTIONS PAPERS'></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className="App4">
                <div class="card4"><img src={subb} alt="subb"/>
                    <div class="info4">
                        <div>
                            <input class='btn4' type='submit' value='REFERENCE BOOKS'></input>
                        </div>
                    </div>
                </div>
            </div>





            <div className='heading'>
                <h1>COMPUTER SCIENCE AND ENGINEERING</h1>
            </div>


            <div className='heading-'>
                <h1>________________________________________</h1>
            </div>


            <div className='heading--'>
                <h1>________________________________________</h1>
            </div>


        </div>
    );
}
export default Four;