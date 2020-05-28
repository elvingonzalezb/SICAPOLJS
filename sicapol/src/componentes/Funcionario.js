import React, { useState, useEffect } from 'react'

const URL_API = 'http://localhost:4000/api';

export const Funcionario = () => {

    const [cedula, setCedula]             = useState("");
    const [apellidos, setApellidos]       = useState("");
    const [nombres, setNombres]           = useState("");
    const [jerarquia, setJerarquia]       = useState("");
    const [cargo, setCargo]               = useState("");
    const [region, setRegion]             = useState("");
    const [comisaria, setComisaria]       = useState("");
    const [estatus, setEstatus]           = useState("");
    const [tipo, setTipo]                 = useState("");
    const [indEditar, setIndEditar]       = useState(false)
    const [id, setId]                     = useState('')
    const [funcionarios, setFuncionarios] = useState([])

    const [addrtype] = useState(
        [
            { cod_region: "R1", nom_region: "LOS TEQUES" }, 
            { cod_region: "R2", nom_region: "CHARALLAVE" }, 
            { cod_region: "R3", nom_region: "CAUCAGUA" },
            { cod_region: "R4", nom_region: "HIGUEROTE" },
            { cod_region: "R5", nom_region: "SANTA TERESA" },
            { cod_region: "R6", nom_region: "GUARENAS-GUATIRE" },
            { cod_region: "R7", nom_region: "PETARE" }
            
        ])   

    const HandleSubmit = async (e) => {
        e.preventDefault()
        if (!indEditar) {
            const res = await fetch(`${URL_API}/funcionarios/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cedula : cedula,
                    apellidos : apellidos,
                    nombres :nombres,
                    jerarquia : jerarquia,
                    cargo : cargo,
                    region : region,
                    comisaria : comisaria,
                    estatus : estatus,    
                    tipo : tipo                    
                })
            })
            const data = await res.json();
            console.log(data)
        } else {
            const res  = await fetch(`${URL_API}/funcionarios/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cedula : cedula,
                    apellidos : apellidos,
                    nombres :nombres,
                    jerarquia : jerarquia,
                    cargo : cargo,
                    region : region,
                    comisaria : comisaria,
                    estatus : estatus,    
                    tipo : tipo,
                    _id: id
                })
            })
            const data = await res.json()
            console.log(data)
            setIndEditar(false)
            setId('')
        }
        await obtenerFuncionarios();
        
        setCedula('')
        setApellidos('')
        setNombres('')
    };

    const obtenerFuncionarios = async () => {
        const res  = await fetch(`${URL_API}/funcionarios/list`)
        const data = await res.json()
        setFuncionarios(data)
    }

    useEffect(() => {
        obtenerFuncionarios();
    }, [])

    const eliminarFuncionario = async (id) => {
        const indEliminar = window.confirm('¿Esta seguro de eliminar el funcionario?')

        if(indEliminar) {
            const res = await fetch(`${URL_API}/funcionarios/remove`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                _id: id
            })
        })
            await res.json();
            await obtenerFuncionarios();        
        }  
    }

    const actualizarFuncionario = async (id) => {
        const res = await fetch(`${URL_API}/funcionarios/query?_id=${id}`)
        const data = await res.json()

        setIndEditar(true);
        setId(id)

        setCedula(data.cedula)
        setApellidos(data.apellidos)
        setNombres(data.nombres)
        setJerarquia(data.jerarquia)
        setCargo(data.cargo)
        setRegion(data.region)
        setComisaria(data.comisaria)
        setEstatus(data.estatus)
        setTipo(data.tipo)       
        console.log(data)
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={HandleSubmit}>
                        <div className="form-group">
                        <input  
                            type="text"
                            placeholder="Cedula"
                            value={cedula}
                            onChange={e => setCedula(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Apellidos"
                            value={apellidos}
                            onChange={e => setApellidos(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombres"
                            value={nombres}
                            onChange={e => setNombres(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Cargo"
                            value={cargo}
                            onChange={e => setCargo(e.target.value)}
                            className="form-control"
                        />
                    </div>   
                
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Jerarquia"
                            value={jerarquia}
                            onChange={e => setJerarquia(e.target.value)}
                            className="form-control"
                        />
                    </div>                

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombre de Region"
                            value={region}
                            onChange={e => setRegion(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Nombre de Comisaria"
                            value={comisaria}
                            onChange={e => setComisaria(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Estatus"
                            value={estatus}
                            onChange={e => setEstatus(e.target.value)}
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <select className="form-control browser-default custom-select"> 
                        <option value="0">SELECCIONE</option>
                        {
                            addrtype.map(region => ( 
                                <option key={region.cod_region} value={region.cod_region} > {region.nom_region} </option> 
                            ))
                        } 
                        </select>                                   
                        
                    </div>
                    <input type="hidden" value={id} onChange={e => setId(e.target.value)}
                        
                        />
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
                            <th scope="col">Cedula</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Jerarquia</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Comisaria</th>
                            <th scope="col">Operaciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {funcionarios.map(funcionario => (
                        <tr key={funcionario._id}>
                            <td>{funcionario.cedula}</td>
                            <td>{funcionario.apellidos}</td>
                            <td>{funcionario.nombres}</td>                            
                            <td>{funcionario.jerarquia}</td>
                            <td>{funcionario.cargo}</td>
                            <td>{funcionario.comisaria}</td>
                            <td>
                            <button 
                                className="btn btn-secondary btn-sm btn-block"
                                onClick={() => actualizarFuncionario(funcionario._id)}>                                
                                Editar
                            </button>
                            <button 
                                className="btn btn-danger btn-sm btn-block"
                                onClick={() => eliminarFuncionario(funcionario._id)}>
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