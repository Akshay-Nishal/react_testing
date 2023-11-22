import React, { useState } from 'react'
function Greeting() {
  const [changeText,setchangeText] = useState(false)
  const changeTextHandler = () => {
    setchangeText(true)
  }
  return (
    <div>
      <h2>Hello World!</h2>
      <input data-testid='text' id='text' type="text"/>
      { !changeText && <p>It's good to see you!</p>}
      { changeText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Message</button>
    </div>
  )
}

export default Greeting
