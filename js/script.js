const formDatosPersonales = document.querySelector("#formDatosPersonales")
const citaRegistradaHTML = document.querySelector(".citaRegistrada")
const citas = []

const renderizarCita = () =>{
    citaRegistradaHTML.innerHTML = `
    <div class:"registrada">
        <h2>Cita registrada con éxito!.</h2>
    </div>
    `

}

formDatosPersonales.addEventListener("submit", (event) => {
    event.preventDefault()
    citas.push({
        Nombre: formDatosPersonales.nombre.value,
        Apellido: formDatosPersonales.apellido.value,
        Email: formDatosPersonales.email.value,
        Celular: formDatosPersonales.celular.value,
        Asunto: formDatosPersonales.asunto.value,
        Mensaje: formDatosPersonales.mensaje.value
    })
    renderizarCita()
    formDatosPersonales.reset()
})

