import React from 'react'

function Myblog() {
    return (
<div className = 'form'>
<div className = 'imgsec'>
</div>
 <div className = 'formsec'>
 <h3> Start Your Blogs Here! </h3>
    <form>
    <input type="text" name="title" placeholder="Enter Title"/>
    <br></br>
    <textarea name="content" cols="25" rows="10" placeholder='Enter Content Here...'> </textarea>
    <br/>   
    <button className = 'button'>Compose</button>
    </form>
</div> 
</div>
    )
}

export default Myblog
