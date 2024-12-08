document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("equipo-medico.html")) {
        const container = document.querySelector(".container.py-2");

        fetch("./doctores.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al cargar el archivo JSON");
                }
                return response.json();
            })
            .then((doctores) => {
                let doctorEncontrado = null;
                let ultimaCitaAtendida = null;
                let primerPacienteAtendido = null;

                const section = document.createElement("section");
                section.className = "mt-4";

                const titulo = document.createElement("h2");
                titulo.textContent = "Conoce a Nuestros Doctores";
                titulo.className = "text-center mt-4 mb-3";
                section.appendChild(titulo);

                const row = document.createElement("div");
                row.className = "row g-4";

                doctores.forEach((doctor) => {
                    const { nombre, especialidad, experiencia, disponibilidad, contacto } = doctor;

                    const div = document.createElement("div");
                    div.className = "col-12 col-md-6 col-lg-4";
                    div.innerHTML = `
                        <div class="card h-100 text-center">
                            <h3>${nombre}</h3>
                            <p><i>${especialidad}</i></p>
                            <p>Experiencia: ${experiencia} años</p>
                            <p>Disponibilidad: ${disponibilidad}</p>
                            <p>Email: ${contacto.email}</p>
                            <p>Teléfono: ${contacto.telefono}</p>
                        </div>
                    `;
                    row.appendChild(div);
                });

                section.appendChild(row);
                container.appendChild(section);

                let doctoresArreglo = [...doctores];
                let pilaCitas = [];
                let colaPacientes = [];

                const agregarDoctor = (nombre, especialidad, experiencia, disponibilidad, email, telefono) => {
                    const nuevoDoctor = {
                        nombre,
                        especialidad,
                        experiencia,
                        disponibilidad,
                        contacto: {
                            email,
                            telefono
                        }
                    };
                    doctoresArreglo.push(nuevoDoctor);
                    actualizarOperaciones();
                };

                const eliminarDoctor = (nombre) => {
                    doctoresArreglo = doctoresArreglo.filter(doctor => doctor.nombre !== nombre);
                    actualizarOperaciones();
                };

                const buscarDoctor = (nombre) => {
                    const doctor = doctoresArreglo.find(doctor => doctor.nombre === nombre);
                    doctorEncontrado = doctor ? doctor.nombre : 'No encontrado';
                    actualizarOperaciones();
                };

                const agendarCita = (paciente) => {
                    pilaCitas.push(paciente); 
                    actualizarOperaciones();
                };

                const atenderCita = () => {
                    const pacienteAtendido = pilaCitas.pop();
                    ultimaCitaAtendida = pacienteAtendido || 'Ninguna';
                    actualizarOperaciones();
                    return pacienteAtendido;
                };

                const ingresarPaciente = (paciente) => {
                    colaPacientes.push(paciente);
                    actualizarOperaciones();
                };

                const atenderPaciente = () => {
                    const pacienteAtendido = colaPacientes.shift();
                    primerPacienteAtendido = pacienteAtendido || 'Ninguno';
                    actualizarOperaciones();
                    return pacienteAtendido;
                };

                const actualizarOperaciones = () => {
                    const operacionesSection = document.getElementById("operaciones");
                    operacionesSection.innerHTML = `
                        <h3>Operaciones Realizadas:</h3>
                        <p><strong>Nuevo Doctor Agregado:</strong> ${doctoresArreglo[doctoresArreglo.length - 1]?.nombre || 'Ninguno'}</p>
                        <p><strong>Doctor Eliminado:</strong> Dr. Mario</p>
                        <p><strong>Doctor Encontrado:</strong> ${doctorEncontrado}</p>
                        <p><strong>Última Cita Atendida:</strong> ${ultimaCitaAtendida}</p>
                        <p><strong>Primer Paciente Atendido:</strong> ${primerPacienteAtendido}</p>
                    `;
                };

                const controlsSection = document.createElement("section");
                controlsSection.className = "mt-4";

                controlsSection.innerHTML = `
                    <h3>Agregar Doctor</h3>
                    <form id="formAgregarDoctor">
                        <input type="text" id="nombre" placeholder="Nombre" required>
                        <input type="text" id="especialidad" placeholder="Especialidad" required>
                        <input type="number" id="experiencia" placeholder="Años de experiencia" required>
                        <input type="text" id="disponibilidad" placeholder="Disponibilidad" required>
                        <input type="email" id="email" placeholder="Email" required>
                        <input type="tel" id="telefono" placeholder="Teléfono" required>
                        <button type="submit">Agregar Doctor</button>
                    </form>

                    <h3>Eliminar Doctor</h3>
                    <input type="text" id="nombreEliminar" placeholder="Nombre del doctor a eliminar">
                    <button id="eliminarDoctor">Eliminar Doctor</button>

                    <h3>Buscar Doctor</h3>
                    <input type="text" id="nombreBuscar" placeholder="Nombre del doctor a buscar">
                    <button id="buscarDoctor">Buscar Doctor</button>

                    <h3>Agregar Cita</h3>
                    <input type="text" id="nombrePacienteCita" placeholder="Nombre del paciente">
                    <button id="agendarCita">Agendar Cita</button>

                    <h3>Atender Cita</h3>
                    <button id="atenderCita">Atender Última Cita</button>

                    <h3>Ingresar Paciente a Cola</h3>
                    <input type="text" id="nombrePacienteCola" placeholder="Nombre del paciente">
                    <button id="ingresarPaciente">Ingresar Paciente</button>

                    <h3>Atender Primer Paciente</h3>
                    <button id="atenderPaciente">Atender Primer Paciente</button>
                `;

                controlsSection.querySelector("#formAgregarDoctor").addEventListener("submit", (e) => {
                    e.preventDefault();
                    const nombre = document.querySelector("#nombre").value;
                    const especialidad = document.querySelector("#especialidad").value;
                    const experiencia = document.querySelector("#experiencia").value;
                    const disponibilidad = document.querySelector("#disponibilidad").value;
                    const email = document.querySelector("#email").value;
                    const telefono = document.querySelector("#telefono").value;
                    agregarDoctor(nombre, especialidad, experiencia, disponibilidad, email, telefono);
                });

                controlsSection.querySelector("#eliminarDoctor").addEventListener("click", () => {
                    const nombreEliminar = document.querySelector("#nombreEliminar").value;
                    eliminarDoctor(nombreEliminar);
                });

                controlsSection.querySelector("#buscarDoctor").addEventListener("click", () => {
                    const nombreBuscar = document.querySelector("#nombreBuscar").value;
                    buscarDoctor(nombreBuscar);
                });

                controlsSection.querySelector("#agendarCita").addEventListener("click", () => {
                    const paciente = document.querySelector("#nombrePacienteCita").value;
                    agendarCita(paciente);
                });

                controlsSection.querySelector("#atenderCita").addEventListener("click", () => {
                    atenderCita();
                });

                controlsSection.querySelector("#ingresarPaciente").addEventListener("click", () => {
                    const paciente = document.querySelector("#nombrePacienteCola").value;
                    ingresarPaciente(paciente);
                });

                controlsSection.querySelector("#atenderPaciente").addEventListener("click", () => {
                    atenderPaciente();
                });

                container.appendChild(controlsSection);

                const operacionesSection = document.createElement("section");
                operacionesSection.id = "operaciones";
                operacionesSection.className = "mt-4";
                operacionesSection.innerHTML = `
                    <h3>Operaciones Realizadas:</h3>
                    <p><strong>Nuevo Doctor Agregado:</strong> Ninguno</p>
                    <p><strong>Doctor Eliminado:</strong> Dr. Mario</p>
                    <p><strong>Doctor Encontrado:</strong> Ninguno</p>
                    <p><strong>Última Cita Atendida:</strong> Ninguna</p>
                    <p><strong>Primer Paciente Atendido:</strong> Ninguno</p>
                `;
                container.appendChild(operacionesSection);
            })
            .catch((error) => {
                console.error("Error al procesar los datos JSON:", error.message);
            });
    }

    const reservarBtn = document.querySelector(".navbar__link--special");
    reservarBtn.addEventListener("click", () => {
        const nombre = prompt("¿Cuál es tu nombre?");
        if (nombre) {
            alert(`Gracias por reservar con nosotros, ${nombre}.`);
            console.log(`Reserva realizada por: ${nombre}`);
        } else {
            alert("La reserva fue cancelada.");
        }
    });

});
