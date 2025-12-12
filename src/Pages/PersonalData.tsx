export function PersonalData() {
    return (
        <div className="section-page" id="personal-data-section">
            <div className="personal-data">
                <h2>Datos personales</h2>
                <div className="info-data">
                    <div className="nombres">
                        <div className="data-piece">
                            <strong>Nombre</strong>
                            <span>Diego Alexander</span>
                        </div>
                        <div className="data-piece">
                            <strong>Apellidos</strong>
                            <span>Cornejo Menjivar</span>
                        </div>
                    </div>
                    <div className="fechas">
                        <div className="data-piece">
                            <strong>Edad</strong>
                            <span>20 años</span>
                        </div>
                        <div className="data-piece">
                            <strong>Fecha de nacimiento</strong>
                            <span>3 de septiembre del 2005</span>
                        </div>
                    </div>
                    <div className="data-piece">
                        <strong>Numero de identificacion</strong>
                        <span>06962076-0</span>
                    </div>
                   <div className="address">
                         <div className="data-piece">
                            <strong>Ciudad</strong>
                            <span>Santiago Nonualco</span>
                        </div>
                        <div className="data-piece">
                            <strong>Departamento</strong>
                            <span>La Paz</span>
                        </div>
                        <div className="data-piece">
                            <strong>Pais</strong>
                            <span>El Salvador</span>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}   