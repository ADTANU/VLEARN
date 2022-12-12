import { textAlign } from '@mui/system';
import React from 'react';
import './FeedBack.css';
function FeedBack()
{
    return( 
        
    <div class="body">
        <div class="Back">
            <form>

            <div class="heads">
                <h1>FEEDBACK</h1>
            </div>
            <div >
                <input type={"text"} placeholder="NAME" class="ntext" required/>
            </div>
            <div >
                <input type={"text"} placeholder="Enter your Feedback here" class="ftext" required />
            </div>
            <div>
                <input type={"email"} placeholder="E-MAIL" class="etext" required />
            </div>
            <div>
                <input  type='submit' placeholder="SUBMIT" class='submit' />
            </div>
            
            </form>
    </div>
    </div>
    );
   
}

export default FeedBack;