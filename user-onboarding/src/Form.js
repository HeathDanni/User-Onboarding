import React, { useState } from 'react';

const Form = () => {
    return (
        <form>
            <label>Name</label>
            <input></input>
            <label>Email</label>
            <input></input>
            <label>Password</label>
            <label>Terms of Service</label>
            <input type='checkbox'></input>
            <input type='submit'></input>
        </form>
    )
}

export default Form;