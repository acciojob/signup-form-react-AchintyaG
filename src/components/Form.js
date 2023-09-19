import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Select");
    const handleChange = (event) => {
        setGender(event.target.value);
    }
    const handleSubmit = (event) => {
        // set(event.target.value);
    }
    return (
        <div className="container">
            <h1>Login Page</h1>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} id="name" required></input>
                </label>
                <label>
                    Email: 
                    <input type="text" id="email" placeholder="Enter your email" required></input>
                </label>
                <label> Gender:
                    <select value={gender} onChange={handleChange} required> 
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <label>
                    Phone No: 
                    <input type="text" id="phone" placeholder="Enter your Phone No." required></input>
                </label>
                <label>
                    Password: 
                    <input type="password" id="password" placeholder="Enter your Password" required></input>
                </label>
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form
