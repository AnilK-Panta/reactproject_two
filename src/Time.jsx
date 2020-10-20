import React from "react";

let Ttoday= Date();
function Time(){
    return(
       
        Ttoday=Ttoday.getHours(),
        
        <h1>{Ttoday}</h1>

    )
}
export default Time;