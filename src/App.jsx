import React from 'react';
import './index.css'

function App(){

    const fName = "Shwetank"
    const lName = "Mishra"

    const hours = new Date().getHours()
    let time;

    if( 0 < hours < 8 ){
        time = "Early Morning";
    }
    else if (8 < hours < 12){
        time = "Morning";
    }
    else if (12 < hours < 16){
        time = "Noon";
    }
    else if (16 < hours < 20){
        time = "Evening";
    }

    return (
        <div>
            <p>
                Hello {fName} {lName}
            </p>
            <h3>It is currently {hours}</h3>
            <p>Good {time} {fName}</p>
        </div>
    );
}

export default App;