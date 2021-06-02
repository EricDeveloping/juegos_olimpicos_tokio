const diasid = document.getElementById('dias');
const horasid = document.getElementById('horas');
const minutosid = document.getElementById('minutos');
const segundosid = document.getElementById('segundos');

const olimpiadas = '23 Jul 2021';

function cuentaAtras(){
    const fechaOlimpiadas = new Date(olimpiadas);
    const fechaActual = new Date();

    const segundosTotales = (fechaOlimpiadas - fechaActual) / 1000;//1000 porque son 1000 milesimas === a un segundo, si se dividiera entre 1 pues no daria el resultado correcto

    //Dias Horas Minutos y Segundos

    const dias = Math.floor(segundosTotales / 3600 / 24);
    const horas = Math.floor(segundosTotales / 3600 % 24);
    const minutos = Math.floor(segundosTotales / 60) % 60;
    const segundos = Math.floor(segundosTotales) % 60;

    //Insercion de tiempos en html

    diasid.innerHTML = dias;
    horasid.innerHTML = horas;
    minutosid.innerHTML = minutos;
    segundosid.innerHTML = segundos;

}
cuentaAtras();
setInterval(cuentaAtras, 1000);