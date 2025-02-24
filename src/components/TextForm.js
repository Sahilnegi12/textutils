import React,{useState} from 'react'



export default function TextForm(props) {
const handleUpClick = ()=>{
  console.log("Uppercase was clicked:" +text);
  let newText= text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase", "success");
}

const handleLoClick = ()=>{
  console.log("Lowercase was clicked:" +text);
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lowercase", "success");
}

const handleReverseClick = () => {
  const reverse = text.split("").reverse().join("");
  setText(reverse);
  props.showAlert("Reversed successfully", "success");
};

const handleCopy =() => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Copied to clipboard", "success");
}

const handleClearClick = () => {
  setText(""); // Clear state
  props.showAlert("Cleared successfully", "success");
};

const handleExtraSpaces = ()=> {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed", "success");
}

const handleOnChange =(event)=>{
  console.log("On change");
  setText(event.target.value)
}

const [text, setText] = useState('');

return (
<>
<div className="container" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}>
<h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#495057':'white' ,border: '1px solid'}} id="myBox" rows="8"></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleReverseClick}>Reverse</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

</div>
<div className="container my-3"  style={{backgroundColor: props.mode==='dark' ?'grey':'white'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview!"} </p>
</div>
</>
  )
}
