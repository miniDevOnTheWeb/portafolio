export function StudiesPage() {
    return (
        <div className="section-page" id="studies">
            <div className="studies-page">
                <h3>Estudios</h3>
                <fieldset className="study-fieldset">
                    <legend><strong className="study-fieldset-title">Universidad</strong></legend>
                    <p className="study">Universidad Tecnologica de El Salvador</p>
                    <span className="minor-span">- Ingenieria en Sistemas y Computacion (2023 - Actualidad)</span>
                </fieldset>
                <fieldset className="study-fieldset">
                    <legend><strong className="study-fieldset-title">Idiomas</strong></legend>
                    <p className="study">Academia Europea (2020)</p>
                    <span className="minor-span">- Inglés Nivel Avanzado</span>
                </fieldset>
            </div>
        </div>
    )
}