import React, { useState, useEffect } from 'react'

const URL_API = 'http://localhost:4000';

export const Usuario = () => {

    const [nombre, setNombre]       = useState('')
    const [email, setEmail]         = useState('')
    const [password, setPassword]   = useState('')
    const [indEditar, setIndEditar] = useState(false)
    const [id, setId]               = useState('')
    const [usuarios, setUsuarios]   = useState([])

    const HandleSubmit = async (e) => {
        e.preventDefault()
        if (!indEditar) {
            const res = await fetch(`${URL_API}/usuarios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    email: email,
                    password: password
                })
            })
            const data = await res.json();
            console.log(data)
        } else {
            const res  = await fetch(`${URL_API}/usuarios/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    email: email,
                    password: password
                })
            })
            const data = await res.json()
            console.log(data)
            setIndEditar(false)
            setId('')
        }
        await obtenerUsuarios();
        
        setNombre('')
        setEmail('')
        setPassword('')
    };

    const obtenerUsuarios = async () => {
        const res  = await fetch(`${URL_API}/usuarios`)
        const data = await res.json()
        setUsuarios(data)
    }
    // funcion similar a didMount
    useEffect(() => {
        obtenerUsuarios();
    }, [])

    const eliminarUsuario = async (id) => {
        const indEliminar = window.confirm('¿Esta seguro de eliminar el usuario?')

        if(indEliminar) {
            const res = await fetch(`${URL_API}/usuarios/${id}`, {
            method: 'DELETE'
        })
            await res.json();
            await obtenerUsuarios();        
        }  
    }

    const actualizarUsuario = async (id) => {
        const res = await fetch(`${URL_API}/usuarios/${id}`)
        const data = await res.json()

        setIndEditar(true);
        setId(id)

        //cambiamos estado de input con los datos a modificar
        setNombre(data.nombre)
        setEmail(data.email)
        setPassword(data.password)
        console.log(data)
    }

    return (
        <div className="row">
            <div className="col-md-">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                onChange={e => setNombre(e.target.value)} 
                                value={nombre}
                                className="form-group"
                                placeholder="Nombre"
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                onChange={e => setEmail(e.target.value)} 
                                value={email}
                                className="form-group"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="password" 
                                onChange={e => setPassword(e.target.value)} 
                                value={password}
                                className="form-group"
                                placeholder="Password"                            autoFocus
                            />
                        </div>
                        <button className="btn btn-primary btn-block">
                            {indEditar ? 'Editar' : 'Registrar'}
                        </button>
                    </form>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario._id}>                            
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.password}</td>
                            <td>
                            <button 
                                className="btn btn-secondary btn-sm btn-block"
                                onClick={() => actualizarUsuario(usuario._id)}>                                
                                Editar
                            </button>
                            <button 
                                className="btn btn-danger btn-sm btn-block"
                                onClick={() => eliminarUsuario(usuario._id)}>
                                Eliminar
                            </button>
                            </td>
                        </tr>
                    ))
                    }                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}