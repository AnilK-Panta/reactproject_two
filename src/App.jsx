import React from "react";
import "./app.css";



function App(){
  let Ntime= new Date();
  Ntime = Ntime.getHours();
  let greeting="";
  const stylecss={};

  if(Ntime>=1 && Ntime<12){
      greeting="Good Morning";
      stylecss.color="green";

  }
  else if(Ntime>=12 && Ntime<19){
      greeting="Good Afternoon";
      stylecss.color="orange";

  }
  else{
      greeting="Good Night";
      stylecss.color="black";

  }
  return(
    <div>
        <h1>Hello Sir, <span style={stylecss}>{greeting}</span> </h1>
    </div>
  )
}

export default App;