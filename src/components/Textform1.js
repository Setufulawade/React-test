import React,{ useState } from 'react'

export default function Textform1(props) {
  const [text, setText] = useState('Enter text here');

  const handleUpclick = ()=> {
    console.log('Uppercase was clicked' +text)
    let newText = text.toUpperCase();
    setText(newText);  
  }

  const hanndleonchange = (event) => {
    console.log('onchange')
    setText(event.target.value)
  }

  return (
    <>
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={hanndleonchange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick} >Convert to UpperCase</button>
    </div>
    <div className='container my-3'>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
