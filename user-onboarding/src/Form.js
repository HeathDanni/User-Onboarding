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
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
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
                value={formData.name}>
                </input>

            <label htmlFor='email'>Email</label>
                <input name='email' 
                    id='email' 
                    onChange={changeHandler}
                    value={formData.email}>
                </input><br></br>

            <label htmlFor='password'>Password</label>
                <input name='password' 
                    id='password'
                    onChange={changeHandler}
                    value={formData.password}>
                </input><br></br>

            <label>Terms of Service</label>
                <input 
                    type='checkbox' 
                    name='terms' 
                    id='terms' 
                    onChange={changeHandler}
                    checked={formData.checked}>
                </input><br></br>
            <input type='submit'></input>

        </form>

        <p>I hope this works: {formData.name}{formData.email}{formData.password}</p>
        </div>
    )
}

export default Form;