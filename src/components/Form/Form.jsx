import React from 'react'
import './form.css'
const Form = () => {
    return (
        <div className='padre'>
            <div className='containerForm'>
                <input className='boxForm' type="text" placeholder='Nombre' />
                <input className='boxForm' type="text" placeholder='Apellido' />
                <input className='boxForm' type="text" placeholder='Email' />
                <input className='boxForm' type="text" placeholder='Confirmar Email' />
                <input className='boxForm' type="button" value={"Entrar"} />
            </div>
        </div>
    )
}

export default Form
