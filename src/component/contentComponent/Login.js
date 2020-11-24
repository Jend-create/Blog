import React, {useState} from 'react';
//import data from './img/Data 4.jpg';

function Login() {

    const [name, setName] = useState('')

    const handleName = (e)=> {
        setName(e.target.value)
        console.log(name)
    };

    return (
        <div className = 'form'>
            <div className = 'imgsec'>
                <img src={('./component/img/Data 4.jpg')} alt='bloglogo'/>
            </div>
             <div className = 'formsec'>
                <label>Username:</label><br/>
                <input type="text" onChange={handleName}/><br></br>

                <label>Password:</label><br/>
                <input type="password"/><br/><br/>
                <button className = 'button'>
                    submit
                </button>
            </div> 
        </div>
    )
}

export default Login

