import React, { useState } from 'react';
import axios from 'axios';
const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    });

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // console.log(formData)

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .post('https://reqres.in/api/users', [e.target.value]);
        setFormData({name: "",
        email: "",
        password: "",
        checked: true})
    }

    console.log()

    return (
        <div>
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
                <input name='name' 
                id='name' 
                onChange={changeHandler}
                value={formData.name}
                required></input>
            <label htmlFor='email'>Email</label>
                <input name='email' 
                    id='email' 
                    onChange={changeHandler}
                    value={formData.email}
                    required></input><br></br>
            <label htmlFor='password'>Password</label>
                <input name='password' 
                    id='password'
                    onChange={changeHandler}
                    value={formData.password}
                    required></input><br></br>
            <label>Terms of Service</label>
                <input type='checkbox' 
                    name='terms' 
                    id='terms' 
                    checked={formData.terms} 
                    required></input><br></br>
            <input type='submit'></input>
        </form>

        <p>I hope this works: {formData.name}{formData.email}{formData.password}</p>
        </div>
    )
}

export default Form;