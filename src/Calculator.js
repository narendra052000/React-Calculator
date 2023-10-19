import { useRef, useState } from 'react';
import './CssCalculator.css'
function Claculator(){
   var [input,setInput]=useState('');
   var[model,setModel]=useState(true);
    var[BGC,setBGC]=useState('');
    var[BGIP,setBGCIP]=useState('');


   var entredval=useRef();

   var Equalfun=()=>{

var VAL=entredval.current.value;

var Output=eval(VAL);

setInput(Output);

   }
var Delete=()=>{
if(input.length>1)
   {
      setInput(input.slice(0,input.length-1))
   }
   else if(input.length<=1){
      setInput('')
   }
   else if(input!=''){
      setInput('')
      
   }
}
var darkmode=()=>{
  setBGC('rgba(225, 189, 243, 0.208)');
  setModel(false);
setBGCIP('rgb(150, 150, 239)');


}
var lightmode=()=>{
   setBGC('rgba(255, 255, 255, 0.868)');
  setModel(true);
  setBGCIP('rgba(245, 166, 166, 0.888)');

}
   
return(
<div>
   <div id="CalcBody" style={{backgroundColor:BGC}}> 

   <h2 align="center">CALCULATOR </h2>
   <div className="input-group mb-3">
  <input type="text" style={{backgroundColor:BGIP}} className="form-control" placeholder=" 5     +     5      =       10" value={input} ref={entredval}/>

</div>

   <div id='column1'> 
   <button id="btnac" className="btn btn-warning"  onClick={()=>{setInput('')}}>AC</button>
    <button id="btndel" className="btn btn-danger" onClick={Delete}>DEL</button>
   <button id="btnequal" className="btn btn-success" onClick={Equalfun}>=</button>
    <button id="btndivide" className="btn btn-primary" onClick={()=>{setInput(input+'/')}}>÷</button></div>
    <div id='column2'>
   <button id="btn7" className="btn btn-dark" onClick={()=>{setInput(input+'7')}}>7</button>
    <button id="btn8" className="btn btn-dark" onClick={()=>{setInput(input+'8')}}>8</button>
    <button id="btn9" className="btn btn-dark" onClick={()=>{setInput(input+'9')}}>9</button>
    <button id="btnmultiply" className="btn btn-primary" onClick={()=>{setInput(input+'*')}}>x</button>
    </div>

    <div id='column3'>
    <button id="btn4" className="btn btn-dark" onClick={()=>{setInput(input+'4')}}>4</button>
    <button id="btn5" className="btn btn-dark" onClick={()=>{setInput(input+'5')}}>5</button>
    <button id="btn6" className="btn btn-dark" onClick={()=>{setInput(input+'6')}}>6</button>
    <button id="btnsubtract" className="btn btn-primary" onClick={()=>{setInput(input+'-')}}>-</button>
    </div>
   <div id='column4'>
    <button id="btn1" className="btn btn-dark" onClick={()=>{setInput(input+'1')}}>1</button>
    <button id="btn2" className="btn btn-dark" onClick={()=>{setInput(input+'2')}}>2</button>
    <button id="btn3" className="btn btn-dark" onClick={()=>{setInput(input+'3')}}>3</button>
    <button id="btnplus" className="btn btn-primary" onClick={()=>{setInput(input+'+')}}>+</button>
   </div>

   <div id='column5'> 
   <button id="btn0" className="btn btn-dark" onClick={()=>{setInput(input+'0')}}>0</button>

   <button id="btnpoint" className="btn btn-dark"  onClick={()=>{setInput(input+'.')}}>.</button>
   <button id="btn00" className="btn btn-dark" onClick={()=>{setInput(input+'00')}}>00</button>
    
    <button id="btnpcnt" className="btn btn-primary" onClick={()=>{setInput(input+'**')}}  >^</button>
<br></br><br></br>
   
   
    {model?<button id="Modechange" class="btn btn-dark " onClick={darkmode}>Dark Mode</button>:<button class="btn btn-light" id="Modechange" onClick={lightmode}>Light Mode</button>}
    </div>
    </div>
</div>
)
}
export default Claculator