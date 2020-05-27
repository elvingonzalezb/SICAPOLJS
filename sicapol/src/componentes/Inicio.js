import React, { Fragment } from 'react'

export const Inicio = () => (
    <Fragment>
    <div className="container">
    <h1 className="card-title">Tablero Informativo</h1> 
        <div className="row pt-5">
            <div className="col-3">
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Actas Policiales</div>
                    <div className="card-body text-primary">
                        <h5 className="card-title">Total: 400</h5>                        
                    </div>
                </div>
            </div>
            <div className="col-3">    
                <div className="card border-success mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Labor Comunitaria</div>
                        <div className="card-body text-success">
                            <h5 className="card-title">Total: 150</h5>                            
                        </div>
                </div>
            </div>
            <div className="col-3">
                <div className="card border-danger mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Labor Interna</div>
                    <div className="card-body text-danger">
                        <h5 className="card-title">Total: 20</h5>                        
                    </div>
                </div>
            </div>
            <div className="col-3">    
                <div className="card border-info mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Novedades</div>
                        <div className="card-body text-info">
                            <h5 className="card-title">Total: 950</h5>                            
                        </div>
                </div>
            </div>

            <div className="col-3">
                <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Homicidios</div>
                    <div className="card-body text-primary">
                        <h5 className="card-title">Total: 100</h5>                        
                    </div>
                </div>
            </div>
            <div className="col-3">    
                <div className="card border-success mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Robos</div>
                        <div className="card-body text-success">
                            <h5 className="card-title">Total: 150</h5>                            
                        </div>
                </div>
            </div>
            <div className="col-3">
                <div className="card border-danger mb-3" style={{maxWidth: '18rem'}}>
                <div className="card-header">Hurtos</div>
                    <div className="card-body text-danger">
                        <h5 className="card-title">Total: 20</h5>                        
                    </div>
                </div>
            </div>
            <div className="col-3">    
                <div className="card border-info mb-3" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Violencia</div>
                        <div className="card-body text-info">
                            <h5 className="card-title">Total: 950</h5>                            
                        </div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
)