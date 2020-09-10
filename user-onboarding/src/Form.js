import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().required('name required'),
    email: yup.string().email('Must be a valid email'),
    password: yup.string().required('password is required'),
    terms: yup.boolean().oneOf([true], 'please agree to terms and conditions')
})

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    });

    

    const validate = (e) => {
        yup.reach(formSchema, e.target.name)
            .validate(e.target.type === 'checkbox' ? e.target.checked : e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                })
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                })
            })
    };

    const changeHandler = (e) => {
        e.persist()
        validate(e)
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData, [e.target.name]: value
        });
    };

    const [users, setUsers] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();

        axios
            .post('https://reqres.in/api/users', formData)
            .then(res => 
                {console.log(res)
                setUsers([
                    ...users,
                     res.data.name
                ])
                })

        .catch(err => console.log(err))
    };

    console.log('users:', users)



    return (
        <div>

        <form onSubmit={submitForm}>

            <label htmlFor='name'>Name</label>
                <input name='name' 
                id='name' 
                onChange={changeHandler}
                value={formData.name}>
                </input>
                <br></br>

        {errors.name.length > 0 ? <p>{errors.name}</p> : null}

            <label htmlFor='email'>Email</label>
                <input name='email' 
                    id='email' 
                    onChange={changeHandler}
                    value={formData.email}>
                </input><br></br>

            {errors.email.length > 0 ? <p>{errors.email}</p> : null}

            <label htmlFor='password'>Password</label>
                <input name='password' 
                    id='password'
                    onChange={changeHandler}
                    value={formData.password}>
                </input><br></br>

                {errors.password.length > 0 ? <p>{errors.password}</p> : null}

            <label>Terms of Service</label>
                <input 
                    type='checkbox' 
                    name='terms' 
                    id='terms' 
                    onChange={changeHandler}
                    checked={formData.terms}>
                </input><br></br>

                {errors.terms.length > 0 ? <p>{errors.terms}</p> : null}

            <input type='submit'></input>

        </form>
                <p>{users}</p>
        </div>
    )
}

export default Form;