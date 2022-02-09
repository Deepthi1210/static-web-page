import React from 'react';
import ReactDOM  from 'react-dom';
import './styles.css';
import image from './images/Lizard.jpg';

function Welcome(){
 let share = "SHARE";
 let learn = "LEARN MORE"
 return(
   <div className="first" >
     <div className="second">
       <img width = '320px' height='200px'  src={image} />
       <div className="third">
         <h2>LIZARD</h2>
         <p>
           Lizard are a widespread group of squamate<br />
           reptiles,with over 6,000 species,ranging across<br />
           all continents except Antarctica
         </p>
         <a href="" className='a1' color='blue'>{share}</a>

         <a href="" className='a2'> {learn}</a>
       </div>
     </div>
   </div>
 )
}



ReactDOM.render(
    <div>
      <Welcome />
    </div>,
  
    document.getElementById("root")
  );