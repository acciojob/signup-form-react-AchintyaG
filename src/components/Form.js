import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber]=useState("");
    const [username, setUserName]=useState("");
    
    const handleChange = (event) => {
        setName(event.target.value);

        setGender(event.target.value);
    }
    const handleSubmit = (event) => {
        if (!name || !email || !phoneNumber || !password) {
            displayError("All fields are mandatory.");
        } else {
            const nameRegex = /^[a-zA-Z0-9\s]+$/;
            const emailRegex = /\S+@\S+\.\S+/;
            const phoneNumberRegex = /^[0-9]+$/;

            if (!setName.match(nameRegex)) {
                displayError("Name is not alphanumeric.");
            } else if (!setEmail.match(emailRegex)) {
                displayError("Email must contain @.");
            } else if (!["male", "female", "other"].includes(gender)) {
                displayError("Please identify as male, female, or other.");
            } else if (!setPhoneNumber.match(phoneNumberRegex)) {
                displayError("Phone Number must contain only numbers.");
            } else if (setPassword.length < 6) {
                displayError("Password must contain at least 6 characters.");
            } else {
                
                const uername = email.split('@')[0];
                setUserName(`Hello ${username}!`);
            }
        }
    }
    return (
        <div className="container">
            <h1>Login Page</h1>
            <form>
                <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input type="text" value={name} data-testid="name" name="name" onChange={handleChange} placeholder="Enter Your Name" id="name" required></input>
                </div>
                <div>
                    <label htmlFor="email">
                    Email:
                </label>
                <input type="text" id="email" data-testid="email" placeholder="Enter your Email" required></input>
                </div>
                <div>
                <label htmlFor="gender"> Gender:
                </label>
                <select  id="gender" name="gender" data-testid="gender" onChange={handleChange} required>
                    <option value="select">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                </div>
                <div>
                <label htmlFor="phone">
                    Phone No:
                </label>
                    <input type="text" id="phoneNumbar" data-testid="phoneNumber" placeholder="Enter your Phone No." required></input>
                </div>
                <div>
                <label htmlFor="password">
                    Password:
                </label>
                    <input type="password" id="password" data-testid="password" placeholder="Enter your Password" required></input>
                </div>
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form
