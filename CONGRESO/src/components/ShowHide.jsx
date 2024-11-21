import React, { useState } from 'react'

function ShowHide() {
  
    const [Show, setShow ] = useState(true);
    const handleClick = (event) => {

        setShow(!Show);
    }
  
    return (
    <div>
       
        <button onClick={handleClick}>{Show ? "Hide " : " Show "} Text</button>
        {Show && <h2>Hide me</h2> }
    </div>
  )
}

export default ShowHide
