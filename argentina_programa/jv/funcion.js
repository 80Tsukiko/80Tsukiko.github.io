
document.getElementById('nombre-ingresado').onkeyup = function () {
    let nombre = document.getElementById('nombre-ingresado').value;
    console.log ('el nombre es ' + nombre);

    document.getElementById('nombre').innerHTML = nombre
}

document.getElementById('apellido-ingresado').onkeyup = function () {
    let apellido = document.getElementById('apellido-ingresado').value;
    console.log ('el apellido es ' + apellido);

    document.getElementById('apellido').innerHTML = apellido
}

document.getElementById('profesion-ingresado').onkeyup = function () {
    let profesion = document.getElementById('profesion-ingresado').value;

    document.getElementById('profesion').innerHTML = profesion
}

document.getElementById('email-ingresado').onkeyup = function () {
    let email = document.getElementById('email-ingresado').value;

    document.getElementById('email').innerHTML = email
}

document.getElementById('telefono-ingresado').onkeyup = function () {
    let telefono = document.getElementById('telefono-ingresado').value;

    document.getElementById('telefono').innerHTML = telefono
}

document.getElementById('localidad-ingresado').onkeyup = function () {
    let localidad = document.getElementById('localidad-ingresado').value;

    document.getElementById('localidad').innerHTML = localidad
}

document.getElementById('web-ingresado').onkeyup = function () {
    let web = document.getElementById('web-ingresado').value;

    document.getElementById('web').innerHTML = web
}

document.getElementById('habilidades-ingresado-1').onkeyup = function () {
    let habilidades1 = document.getElementById('habilidades-ingresado-1').value;

    document.getElementById('habilidades-1').innerHTML = habilidades1
}

document.getElementById('habilidades-ingresado-2').onkeyup = function () {
    let habilidades2 = document.getElementById('habilidades-ingresado-2').value;

    document.getElementById('habilidades-2').innerHTML = habilidades2
}

document.getElementById('acerca_de_mi-ingresado').onkeyup = function () {
    let acerca_de_mi = document.getElementById('acerca_de_mi-ingresado').value;

    document.getElementById('acerca_de_mi').innerHTML = acerca_de_mi
}

document.getElementById('formacion-ingresado').onkeyup = function () {
    let formacion = document.getElementById('formacion-ingresado').value;

    document.getElementById('formacion').innerHTML = formacion
}


document.getElementById('institucion-ingresado').onkeyup = function () {
    let institucion = document.getElementById('institucion-ingresado').value;

    document.getElementById('institucion').innerHTML = institucion
}

document.getElementById('ingresa-fecha-inicio-formacion').onkeyup = function() {
    let fecha_formacion1 = document.getElementById('ingresa-fecha-inicio-formacion').value;

    document.getElementById('fecha-inicio-formacion').innerHTML = fecha_formacion1

}

document.getElementById('ingresa-fecha-finalizacion-formacion').onkeyup = function() {
    let fecha_formacion2 = document.getElementById('ingresa-fecha-finalizacion-formacion').value;

    document.getElementById('fecha-finalizacion-formacion').innerHTML = fecha_formacion2

}

document.getElementById('puesto-ingresado').onkeyup = function () {
    let puesto = document.getElementById('puesto-ingresado').value;

    document.getElementById('puesto').innerHTML = puesto
}

document.getElementById('ingresa-fecha-inicio-trabajo').onkeyup = function() {
    let fecha_trabajo1 = document.getElementById('ingresa-fecha-inicio-trabajo').value;

    document.getElementById('fecha-inicio-trabajo').innerHTML = fecha_trabajo1

}

document.getElementById('ingresa-fecha-finalizacion-trabajo').onkeyup = function() {
    let fecha_trabajo2 = document.getElementById('ingresa-fecha-finalizacion-trabajo').value;

    document.getElementById('fecha-finalizacion-trabajo').innerHTML = fecha_trabajo2

}