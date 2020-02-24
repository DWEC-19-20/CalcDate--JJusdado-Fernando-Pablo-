function calcDate(nf, dias) {
    var fecha = document.getElementById('fecha').value;
    var dias = +document.getElementById('dias').value;
    var nf = new Date(fecha);
    nf.setDate(nf.getDate() + dias);
    var resultado = nf.toLocaleDateString("es-ES");
    return document.getElementById("resul").innerHTML = resultado;
}

function getDays(fechaIni, fechaFin) {
    var fechaIni = new Date(document.getElementById('inicio').value);
    var fechaFin = new Date(document.getElementById('fin').value);
    var diasdif = fechaFin.getTime() - fechaIni.getTime();
    var contdias = Math.round(diasdif / (1000 * 60 * 60 * 24)) + " dias de diferencia";
    return document.getElementById('resul2').innerHTML = contdias;
}

function calcWorkingDate() {
    var fechaFinal = new Date(startdate);
    var fecha = new Date(startdate);
    var arrayFestivos = [[1, 0], [6, 0], [1, 4], [15, 7], [12, 9], [1, 10], [6, 11], [8, 11], [25, 11]];
    var diasFinales = 0;
    if (days >= 0) {
        for (var i = 0; i <= days; i++) {
            fecha.setDate(fecha.getDate() + 1);
            if (fecha.getDay() == 0 || fecha.getDay() == 6) {
                diasFinales++;
            }
        }
        fecha.setDate(fecha.getDate() - 1);
        for (var j = 0; j < arrayFestivos.length; j++) {
            if ((fecha.getMonth() == arrayFestivos[j][1]) && (fecha.getDate() == arrayFestivos[j][0])) {
                diasFinales++;
            }
        }
        days += diasFinales;
    } else {
        for (var i = 0; i >= days; i--) {
            fecha.setDate(fecha.getDate() - 1);
            if (fecha.getDay() == 0 || fecha.getDay() == 6) {
                diasFinales++;
            }
        }
        for (var j = 0; j < arrayFestivos.length; j++) {
            if ((fecha.getMonth() == arrayFestivos[j][1]) && (fecha.getDate() == arrayFestivos[j][0])) {
                diasFinales++;
            }
        }
        days -= diasFinales;
    }
    fechaFinal.setDate(fechaFinal.getDate() + days);
    if (fechaFinal.getDay() == 0) {
        fechaFinal.setDate(fechaFinal.getDate() - 2);
    } else if (fechaFinal.getDay() == 6) {
        fechaFinal.setDate(fechaFinal.getDate() - 1);
    }
    for (var j = 0; j < arrayFestivos.length; j++) {
        if ((fechaFinal.getMonth() == arrayFestivos[j][1]) && (fechaFinal.getDate() == arrayFestivos[j][0])) {
            fechaFinal.setDate(fechaFinal.getDate() + 1);
        }
    }
    return fechaFinal.toLocaleDateString("es-ES");
}

function getWorkingDays(startdate, endDate) {
    var resultado1 = new Date(startdate);
    var resultado2 = new Date(endDate);
    var arrayFestivos = [[1, 0], [6, 0], [1, 4], [15, 7], [12, 9], [1, 10], [6, 11], [8, 11], [25, 11]];
    var dias = 0;
    var diasNaturales = Math.round(Math.abs(resultado1.getTime() - resultado2.getTime()) / ((1000 * 60 * 60 * 24)));
    for (var i = 0; i < diasNaturales; i++ , resultado1.setDate(resultado1.getDate() + 1)) {
        if (resultado1.getDay() == 0 || resultado1.getDay() == 6) {
            dias++;
        }
    }
    for (var j = 0; j < arrayFestivos.length; j++) {
        if ((resultado1.getMonth() == arrayFestivos[j][1]) && (resultado1.getDate() == arrayFestivos[j][0])) {
            dias++;
        }
    }
    if (resultado1 > resultado2) {
        return (-1 * (diasNaturales - dias));
    } else {
        return diasNaturales - dias;
    }
}

