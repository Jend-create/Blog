import React, {useState} from 'react';

function Signup() {

    const [name, setName] = useState('')

    const handleName = (e)=> {
        setName(e.target.value)
        console.log(name)
    };

    return (
        <div className = 'form'>
            <div className = 'imgsec'>
            </div>
             <div className = 'formsec'>
                <label>Email:</label><br/>
                <input type="email" onChange={handleName}/><br></br>
               
                <label>Password:</label><br/>
                <input type="password"/><br/><br/>

                <label>Confirm Password:</label><br/>
                <input type="password"/><br/><br/>

                <button className = 'button'>
                    submit
                </button>
            </div> 
        </div>
    )
}

export default Signup;