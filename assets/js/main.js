document.write('<p>Estadisticas centro medico ñuñoa</p>')

// array object de radiologia
const radiologia = [{
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    prevision: 'FONASA'
}, {
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    prevision: 'ISAPRE'
}, {
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    prevision: 'ISAPRE'
}, {
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    prevision: 'FONASA'
}, {
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    prevision: 'FONASA'
}]

// array object de traumatologia
const traumatologia = [{
    hora: '8:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    prevision: 'FONASA'
}, {
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    prevision: 'ISAPRE'
}, {
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    prevision: 'ISAPRE'
}, {
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    prevision: 'ISAPRE'
}, {
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '16554741-K',
    prevision: 'FONASA'
}, {
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    prevision: 'ISAPRE'
}, {
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    prevision: 'ISAPRE'
}]


// array object de dental
const dental = [{
    hora: '8:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '11123425-6',
    prevision: 'ISAPRE'
}, {
    hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '9878789-2',
    prevision: 'ISAPRE'
}, {
    hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '7998789-5',
    prevision: 'FONASA'
}, {
    hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '18887662-K',
    prevision: 'FONASA'
}, {
    hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '17665461-4',
    prevision: 'FONASA'
}, {
    hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '14441281-0',
    prevision: 'ISAPRE'
}];


// funcion para mostrar las estadisticas primera y ultima atencion
// va con validacion en caso que la tabla se encuentre vacia
function mostrarEstadisticas(especialidad, primeraClase, ultimaClase) {
    if (especialidad.length > 0) {
        const primeraAtencion = especialidad[0];
        const ultimaAtencion = especialidad[especialidad.length - 1];

        // uso textcontent para asignar solo texto, nada de html
        document.querySelector(primeraClase).textContent += `${primeraAtencion.paciente} - ${primeraAtencion.prevision}`;
        document.querySelector(ultimaClase).textContent += `${ultimaAtencion.paciente} - ${ultimaAtencion.prevision}`;
    } else {
        document.querySelector(primeraClase).textContent = 'No hay datos';
        document.querySelector(ultimaClase).textContent = 'No hay datos';
    }
}

// mostrar la primera y última atención de cada especialidad
// los argumentos son el objeto y el nombre de las clases html
mostrarEstadisticas(radiologia, ".primeraAtencionRadio", ".ultimaAtencionRadio");
mostrarEstadisticas(traumatologia, ".primeraAtencionTrauma", ".ultimaAtencionTrauma");
mostrarEstadisticas(dental, ".primeraAtencionDental", ".ultimaAtencionDental");


// funcion para generar la tabla separada para cada especialidad
function generarTabla(especialidad, tablaId) {
    // cabecera de la tabla, a futuro se concatenará con el body de la tabla
    let tablaText = `
        <tr>
            <th>HORA</th>
            <th>ESPECIALISTA</th>
            <th>PACIENTE</th>
            <th>RUT</th>
            <th>PREVISIÓN</th>
        </tr>`

    // recorrido del objeto
    especialidad.forEach(function (propiedad) {
        tablaText += `
        <tr>
            <td>${propiedad.hora}</td>
            <td>${propiedad.especialista}</td>
            <td>${propiedad.paciente}</td>
            <td>${propiedad.rut}</td>
            <td>${propiedad.prevision}</td>
        </tr>`
    })

    // se le asigna el body de la tabla al id correspondiente
    document.getElementById(tablaId).innerHTML = tablaText;
}


// mostrar tabla con los datos, el argumento es el objeto y el nombre del id html
generarTabla(radiologia, "tabla-radiologia");
generarTabla(traumatologia, "tabla-traumatologia");
generarTabla(dental, "tabla-dental");


