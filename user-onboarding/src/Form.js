import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        checkbox: "false"
    });

    const formSubmit = (e) => {
        e.preventDefault();
    };

    const inputChange = () => {
        setFormData({name: e.target.value});
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor='name'>Name</label>
                <input name='name' required></input>
            <label htmlFor='email'>Email</label>
                <input name='email' required></input><br></br>
            <label htmlFor='password'>Password</label>
                <input name='password' required></input><br></br>
            <label>Terms of Service</label>
                <input type='checkbox' required></input><br></br>
            <input type='submit'></input>
        </form>
    )
}

export default Form;